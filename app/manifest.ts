import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Proton Miri | Sheenalina Simon",
    short_name: "Proton Miri",
    description:
      "Jual Proton Miri — dapatkan anggaran full loan kereta Proton idaman anda bersama Sheenalina Simon.",
    start_url: "/",
    display: "standalone",
    background_color: "#080c12",
    theme_color: "#080c12",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
