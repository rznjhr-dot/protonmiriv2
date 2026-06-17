# Proton Miri Maintenance Guide

> Panduan ringkas untuk kemas kini content, deployment, dan troubleshooting.

---

## 📦 Quick Start (Local Dev)

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build untuk static export (output ke `out/`)
npm run lint       # Check code quality
```

---

## 🚗 1. Tukar Harga / Spec Kereta

**File:** `lib/vehicles.ts`

Setiap model Proton ada entry macam ni:

```typescript
{
  id: 'proton-x70',
  name: 'Proton X70',
  variant: '1.5 TGDI Premium',
  image: '/images/proton/x70.png',
  price: 123800,            // <-- Tukar harga di sini (RM, tanpa comma)
  color: '#003366',
  promoRate: 2.38,          // <-- Rate promosi (kalau ada)
  normalRate: 2.88,         // <-- Rate biasa
  loanTerm: 9,              // <-- Tempoh loan (tahun)
}
```

> **Gambar:** Letak dalam `public/images/proton/` — format PNG/WebP, pastikan path sama dengan `image` field.

> **Susunan kereta:** Ikut tertib dalam array — kereta pertama akan jadi default calculator.

---

## 📞 2. Tukar No. WhatsApp

**File:** `lib/whatsapp.ts`

```typescript
const PHONE_NUMBER = '60198543110'   // <-- Tukar nombor di sini
```

Nombor ni guna untuk semua:
- Calculator (ayat "Contact Me")
- Hero section
- Book Test Drive
- 404 page

---

## 🖼️ 3. Tambah Gambar Gallery

1. Letak gambar dalam `public/images/delivery/`
2. Edit **`app/gallery/photos.json`** — format:

```json
[
  {
    "src": "/images/delivery/gambar-baru.jpg",
    "alt": "Penerangan gambar",
    "date": "2025-06-15"
  }
]
```

> Gambar akan auto-display dalam gallery page. Susunan ikut array — gambar baru letak atas sekali kalau nak paling baru dulu.

---

## 🧮 4. Cara Calculator Kerja

**File:** `lib/finance.ts`

Formula: **Flat Rate (Original Rate)**

```
Monthly Payment = (Loan Amount × Rate × Years + Loan Amount) / (Years × 12)
```

- **Rate:** Dari `vehicles.ts` (guna promoRate kalau ada, normalRate kalau tak)
- **Loan Amount:** Harga kereta - deposit
- **Bank:** CIMB, Maybank, Public Bank, RHB, Hong Leong, Ambank, Affin, Bank Islam, Bank Muamalat

---

## ⚙️ 5. Deployment — Auto dari GitHub

```mermaid
GitHub Push → Netlify Auto-Build → Live (protonmiri.com.my)
```

Cukup:
```bash
git add .
git commit -m "update xxx"
git push
```

Tunggu ~2 minit, website auto update.

### Manual Deploy (Netlify)
1. Buka https://app.netlify.com
2. Pilih site `protonmiriv2`
3. Trigger deploy → Deploy site

---

## 🌐 6. DNS / Domain (Cloudflare)

| Senario | Tindakan |
|---------|----------|
| Tukar domain | Update CNAME records di Cloudflare dashboard |
| Site down (blank page) | Check CSP headers kat `public/_headers` |
| Nak pointing domain lain | Tambah domain baru di Netlify → Site settings → Domain |

**Important:** Kalau site blank (cuma background je nampak) — biasanya CSP block inline scripts. Check `public/_headers` → mesti ada `'unsafe-inline'` kat `script-src`.

---

## 🔧 7. Troubleshooting Biasa

| Masalah | Punca | Solution |
|---------|-------|----------|
| Site blank (cuma bg honeycomb) | CSP block inline script | Check `public/_headers` → `script-src 'self' 'unsafe-inline'` |
| Build fail | Dependency error | `rm -rf .next node_modules && npm install && npm run build` |
| Lint error | Code style | `npm run lint` — check error, fix, build balik |
| Calculator salah rate | vehicles.ts | Check `promoRate` / `normalRate` value |
| Gambar tak muncul | Path/image missing | Check `public/images/proton/` — file mesti ada |
| WhatsApp link salah | lib/whatsapp.ts | Check `PHONE_NUMBER` |
| Site tak update after push | Netlify build failed | Buka Netlify dashboard → check Deploy log |

---

## 📁 8. Struktur Folder Penting

```
protonmiriv2/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── not-found.tsx           # Custom 404 page
│   ├── gallery/                # Gallery page
│   ├── globals.css             # Global styles (honeycomb, etc)
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
├── components/                 # React components
│   ├── hero.tsx                # Hero banner section
│   ├── vehicle-card.tsx        # Vehicle card display
│   ├── calculator.tsx          # Loan calculator
│   ├── map-section.tsx         # Google Maps embed
│   ├── book-test-drive.tsx     # Test drive form
│   └── error-boundary.tsx      # Error boundary
├── lib/                        # Shared logic
│   ├── vehicles.ts             # Vehicle data (PRICES HERE)
│   ├── finance.ts              # Calculator formula
│   └── whatsapp.ts             # WhatsApp number (NUMBER HERE)
├── public/                     # Static files
│   ├── _headers                # CSP + security headers
│   └── images/
│       ├── proton/             # Car images
│       └── delivery/           # Gallery photos
├── netlify.toml                # Netlify config
├── MAINTENANCE.md              # This file 💁
└── package.json
```

---

## ✅ Checklist Update Pantas

Bila nak update apa-apa:

- [ ] Tukar data kat `lib/vehicles.ts`
- [ ] Tukar gambar kat `public/images/proton/`
- [ ] Test local: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Git add → commit → push
- [ ] Confirm live kat protonmiri.com.my

---

*Last updated: June 2025*
*Generated by Ghost — any questions, just ask!*
