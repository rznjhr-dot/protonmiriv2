import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lineup",
  description:
    "Senarai lengkap semua model dan varian Proton — Saga, Persona, S70, X50, X70, X90. Lihat spesifikasi, harga OTR, rebate, dan anggaran bulanan. Jual Proton Miri bersama Sheenalina Simon.",
  alternates: {
    canonical: "/lineup",
  },
  openGraph: {
    title: "Lineup Lengkap Proton | Semua Model & Varian",
    description:
      "Teroka kesemua model dan varian Proton — harga OTR, rebate, spesifikasi enjin, dan anggaran bulanan. Hubungi Sheenalina Simon, Sales Advisor Proton Miri.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Proton Miri Lineup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lineup Lengkap Proton | Semua Model & Varian",
    description:
      "Senarai penuh model Proton — Saga, Persona, S70, X50, X70, X90. Semua varian, harga & bulanan.",
  },
};

export default function LineupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
