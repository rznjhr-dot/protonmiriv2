import raw from "./photos.json";

export interface GalleryImage {
  src: string;
  model: string;
  customer: string;
  date: string;
  caption: string;
}

const photos: GalleryImage[] = raw as GalleryImage[];

export default photos;
