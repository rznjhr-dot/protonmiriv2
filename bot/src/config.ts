import { resolve } from "path";

// ── Paths (relative to project root) ──
export const PROJECT_ROOT = resolve(import.meta.dirname, "../..");
export const PHOTOS_DIR = resolve(PROJECT_ROOT, "public/images/delivery");
export const GALLERY_JSON = resolve(PROJECT_ROOT, "app/gallery/photos.json");

// ── Telegram ──
export const BOT_TOKEN = process.env.BOT_TOKEN ?? "";
export const ALLOWED_USER_IDS = (process.env.ALLOWED_USERS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
  .map(Number);

// ── Validation ──
if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is required. Set it in .env or environment.");
  process.exit(1);
}
