# Changelog

## [Unreleased]

### ✨ Added
- **Full Lineup page** (`/lineup`) — dedicated subpage showing all 6 Proton models with every variant: OTR, rebate, engine, transmission, monthly payment, and promo badges
- **Lineup Table section** on homepage — "Lineup Lengkap Proton" table with clickable rows linking to `/lineup`
- **Promo system** — `promo` field on variants; "Free Service 2 Tahun" badge on X50 Premium, X50 Flagship & X70 Premium (card + calculator)
- **Auto-open calculator** via query param `/?model=saga` — used by Kira buttons on `/lineup`
- **Footer redesign** — 3-column layout (Brand, Menu, Contact) with premium styling, gradient accents, and compact spacing
- **Disclaimer section** separated above footer

### 🔧 Changed
- **Vehicle cards** — reduced internal padding, tighter grid spacing (`px-1 mb-3`), more compact layout
- **Calculator** — promo badge shown inline when a qualifying variant is selected
- **Navbar** — "Lineup" link added; "Gallery" link removed
- **Sitemap** — `/lineup` added (priority 0.8), `/gallery` removed
- **Footer labels** — "Monthly Calculator" and "Models Lineup" for clearer navigation

### 🗑️ Removed
- **Gallery page** — removed entirely (route, layout, sitemap, all links); Facebook Page Plugin approach deemed impractical for static export
- **AnimatePresence unused import** — cleaned up

### 🐛 Fixed
- Repair broken `<div className=` tag in vehicle grid (multiedit artefact)
