import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Lihat foto-foto delivery Proton Miri terkini. Jual Proton Miri, full loan & senang loan bersama Sheenalina Simon, Sales Advisor Proton Sarawak.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery",
    description:
      "Lihat foto-foto delivery Proton Miri terkini. Jual Proton Miri, full loan & senang loan bersama Sheenalina Simon.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Proton Miri Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery",
    description:
      "Jual Proton Miri — lihat foto-foto delivery terkini bersama Sheenalina Simon.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
