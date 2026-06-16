# 🤖 Delivery Gallery Bot — Panduan Lengkap

Bot Telegram untuk upload gambar delivery terus ke website.

---

## 📱 Cara Setup Bot (SEKALI JE)

### Langkah 1: Dapatkan Token dari BotFather

1. Buka Telegram, cari **[@BotFather](https://t.me/BotFather)**
2. Send command `/newbot`
3. Jawab soalan dia:
   - Nama bot: **Contoh: Proton Miri Delivery**
   - Username: **Contoh: protonmiridelivery_bot**
4. Lepas tu BotFather akan bagi **token** — salin token tu (nampak macam `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)
5. **Simpan token tu** — kita akan guna nanti

### Langkah 2: Setup File .env

1. Buka folder `bot`
2. Cari file **`.env.example`**
3. **Rename** jadi **`.env`**
4. Edit `.env` guna Notepad / TextEdit:

```
BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
ALLOWED_USERS=
```

- Gantikan `123456:...` dengan token dari BotFather tadi
- **ALLOWED_USERS** — optional, boleh kosongkan dulu

### Langkah 3: Install & Jalan

1. Buka **Terminal** (Search "Terminal" kat Mac)
2. Taip satu-satu:

```bash
cd Desktop/protonmiriv2/bot
npm install
npm start
```

3. Akan nampak mesej: `✅ Bot is running! Send /start in Telegram.`

**JANGAN TUTUP Terminal** — kalau tutup, bot mati.

---

## 📸 Cara Guna Bot (HARI-HARI)

### Buka Bot kat Telegram

1. Pergi ke bot yang kau buat tadi (guna username yang kau daftar)
2. Click **Start**
3. Bot akan bagi panduan

### Upload Gambar Delivery

1. Ambil gambar delivery pelanggan
2. Send gambar tu ke bot
3. **TULIS CAPTION** dalam format ni:

```
Model Kereta | Nama Pelanggan | Keterangan
```

**Contoh:**
```
Proton X50 | Encik Ahmad | Selamat maju jaya dengan kereta baru!
```

```
Proton S70 | Puan Sarah | Semoga berpuas hati dengan S70!
```

4. Bot akan reply: ✅ simpan, update gallery, rebuild website

### Guna Command Lain

| Command | Gunaan |
|---------|--------|
| `/start` | Mula / dapatkan panduan |
| `/help` | Panduan macam ni jugak |
| `/status` | Tengok berapa gambar dah ada |
| `/rebuild` | Kalau nak rebuild website manual |

---

## 🌐 Cara Deploy / Push Update

Ada **2 cara** nak upload website lepas tambah gambar:

### Cara A: Kalau guna Netlify / Vercel auto-deploy

1. Buka **Terminal**
2. Taip:
```bash
cd Desktop/protonmiriv2
git add .
git commit -m "update gallery photos"
git push
```

3. Lepas push, Netlify/Vercel akan deploy automatik.
4. **Tunggu 1-2 minit** — website akan update sendiri.

### Cara B: Kalau manual upload

Bot dah auto-rebuild lepas setiap gambar. Folder `out/` dah siap.

1. Buka folder `out/`
2. Upload semua file dalam tu ke hosting (cPanel / FTP / hosting masing-masing)
3. Siap.

---

## ⚠️ Penting!

- **Bot kena jalan** — kalau nak bot hidup 24/7, kena host kat server (VPS/Raspberry Pi).
- **Alternatif** — kalau taknak host 24/7, boleh:
  1. Jalan bot bila nak upload gambar je
  2. Upload gambar
  3. Tutup bot
  4. Commit & push macam Cara A kat atas
- **Bot mati** — kalau tutup Terminal, bot mati. Kena jalan balik guna `npm start`.

---

Ada masalah? Tanya saya.
