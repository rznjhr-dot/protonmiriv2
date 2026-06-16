import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { writeFile } from "fs/promises";
import { join, extname } from "path";
import { BOT_TOKEN, ALLOWED_USER_IDS, PROJECT_ROOT, PHOTOS_DIR, GALLERY_JSON } from "./config";
import { addPhoto, ensureDir, gallerySummary, loadGallery } from "./gallery";
import { execSync } from "child_process";

// ── Init bot ──
const bot = new Telegraf(BOT_TOKEN);

// ── Auth middleware ──
function isAllowed(userId: number): boolean {
  if (ALLOWED_USER_IDS.length === 0) return true; // allow all if not configured
  return ALLOWED_USER_IDS.includes(userId);
}

// ── Help text ──
const HELP = `
🤖 *Delivery Gallery Bot*

Hantar gambar delivery pelanggan, dan bot akan:
1. Simpan gambar
2. Update gallery website
3. Rebuild website

*Cara guna:*
Hantar *gambar* dengan *caption* dalam format:

\`Model | Nama Pelanggan | Keterangan\`

*Contoh:*
\`Proton X50 | Encik Ahmad | Selamat maju jaya dengan kereta baru!\`

*Command:*
/start — Mula
/help — Panduan ini
/status — Status gallery terkini
/rebuild — Rebuild website manual
`.trim();

// ── Commands ──
bot.start((ctx) => {
  if (!isAllowed(ctx.from.id)) return ctx.reply("⛔ Anda tidak dibenarkan menggunakan bot ini.");
  ctx.replyWithMarkdown(HELP);
});

bot.help((ctx) => {
  if (!isAllowed(ctx.from.id)) return;
  ctx.replyWithMarkdown(HELP);
});

bot.command("status", (ctx) => {
  if (!isAllowed(ctx.from.id)) return;
  ctx.replyWithMarkdown(gallerySummary());
});

bot.command("rebuild", async (ctx) => {
  if (!isAllowed(ctx.from.id)) return;
  const msg = await ctx.reply("🔄 Membina semula website...");
  try {
    execSync("npm run build", { cwd: PROJECT_ROOT, stdio: "pipe" });
    await ctx.reply("✅ Website berjaya dibina semula!");
  } catch (e: any) {
    await ctx.reply(`❌ Gagal rebuild:\n\`\`\`${e.stderr?.slice(0, 1000) || e.message}\`\`\``);
  }
});

// ── Photo handler ──
bot.on(message("photo"), async (ctx) => {
  if (!isAllowed(ctx.from.id)) return;

  // Get the largest photo
  const photos = ctx.message.photo;
  const file = photos[photos.length - 1];
  const caption = ctx.message.caption?.trim() || "";

  if (!caption) {
    return ctx.reply(
      "⚠️ Sila hantar *caption* dengan format:\n\n" +
        "`Model | Nama Pelanggan | Keterangan`\n\n" +
        "Contoh: `Proton X50 | Encik Ahmad | Selamat maju jaya!`",
      { parse_mode: "Markdown" },
    );
  }

  // Parse caption: Model | Customer | Caption
  const parts = caption.split("|").map((s) => s.trim());
  if (parts.length < 2) {
    return ctx.reply(
      "⚠️ Format caption salah. Guna:\n\n" +
        "`Model | Nama Pelanggan | Keterangan`\n\n" +
        "Contoh: `Proton X50 | Encik Ahmad | Selamat maju jaya!`",
      { parse_mode: "Markdown" },
    );
  }

  const [model, customer, ...rest] = parts;
  const desc = rest.join(" | ") || "Selamat maju jaya!";

  // Download photo
  try {
    const link = await ctx.telegram.getFileLink(file.file_id);
    const ext = extname(link.href) || ".jpg";
    const ts = Date.now();
    const filename = `delivery_${ts}${ext}`;
    const savePath = join(PHOTOS_DIR, filename);

    ensureDir();

    // Download and save
    const resp = await fetch(link.href);
    if (!resp.ok) throw new Error("Gagal download gambar");
    const buffer = Buffer.from(await resp.arrayBuffer());
    await writeFile(savePath, buffer);

    // Update gallery data
    const count = addPhoto(filename, model, customer, desc);

    await ctx.replyWithMarkdown(
      `✅ *Gambar disimpan!*\n\n` +
        `📋 Model: *${model}*\n👤 Pelanggan: *${customer}*\n📝 ${desc}\n📸 Gallery: *${count} foto*`,
    );

    // Auto-rebuild
    const statusMsg = await ctx.reply("🔄 Sedang rebuild website...");
    try {
      execSync("npm run build", { cwd: PROJECT_ROOT, stdio: "pipe" });
      await ctx.reply("✅ Website berjaya dibina semula! Gallery sudah dikemaskini.");
    } catch (e: any) {
      await ctx.reply(
        `⚠️ Gambar disimpan tapi rebuild gagal. Jalan manual: \`npm run build\`\n\`\`\`${e.stderr?.slice(0, 500) || e.message}\`\`\``,
      );
    }
  } catch (e: any) {
    await ctx.reply(`❌ Ralat: ${e.message}`);
  }
});

// ── Text-only fallback ──
bot.on("message", (ctx) => {
  if (!isAllowed(ctx.from.id)) return;
  if (ctx.message && "text" in ctx.message) {
    ctx.reply("📸 Sila hantar *gambar* dengan caption format yang betul.\nGuna /help untuk panduan.", {
      parse_mode: "Markdown",
    });
  }
});

// ── Start ──
async function main() {
  console.log("🤖 Delivery Gallery Bot starting...");
  console.log(`📂 Photos dir: ${PHOTOS_DIR}`);
  console.log(`📄 Gallery data: ${GALLERY_JSON}`);
  console.log(`👥 Allowed users: ${ALLOWED_USER_IDS.length ? ALLOWED_USER_IDS.join(", ") : "ALL (no restriction)"}`);
  console.log("───");

  // Show current gallery count
  const photos = loadGallery();
  console.log(`📸 Current gallery: ${photos.length} photos`);

  // Start polling
  await bot.launch();
  console.log("✅ Bot is running! Send /start in Telegram.");
}

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

main().catch((err) => {
  console.error("❌ Bot failed:", err);
  process.exit(1);
});
