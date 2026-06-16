import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import { PHOTOS_DIR, GALLERY_JSON } from "./config";

export interface GalleryImage {
  src: string;
  model: string;
  customer: string;
  date: string;
  caption: string;
}

/** Load current gallery data from photos.json */
export function loadGallery(): GalleryImage[] {
  if (!existsSync(GALLERY_JSON)) return [];
  const raw = readFileSync(GALLERY_JSON, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/** Save gallery data back to photos.json */
export function saveGallery(photos: GalleryImage[]): void {
  writeFileSync(GALLERY_JSON, JSON.stringify(photos, null, 2), "utf-8");
}

/** Ensure delivery photos directory exists */
export function ensureDir(): void {
  if (!existsSync(PHOTOS_DIR)) {
    mkdirSync(PHOTOS_DIR, { recursive: true });
  }
}

/**
 * Add a new photo entry.
 * The image file is expected to already be saved in PHOTOS_DIR.
 * Returns the updated count.
 */
export function addPhoto(
  filename: string,
  model: string,
  customer: string,
  caption: string,
): number {
  ensureDir();
  const photos = loadGallery();

  const today = new Date().toLocaleDateString("ms-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  photos.push({
    src: `/images/delivery/${filename}`,
    model,
    customer,
    date: today,
    caption,
  });

  saveGallery(photos);
  return photos.length;
}

/** Get a summary string of the gallery */
export function gallerySummary(): string {
  const photos = loadGallery();
  if (photos.length === 0) return "📸 Tiada foto dalam gallery.";
  return `📸 *Gallery* — ${photos.length} foto\n\n${photos
    .map(
      (p, i) =>
        `${i + 1}. *${p.model}* — ${p.customer}\n   ${p.caption}`,
    )
    .join("\n")}`;
}
