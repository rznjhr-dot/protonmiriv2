import type { Metadata } from "next";
import { Orbitron, Inter, Lavishly_Yours } from "next/font/google";
import ErrorBoundary from "@/components/error-boundary";
import { SITE_URL, SITE_NAME, PHONE_NUMBER, EMAIL, SHOWROOM } from "@/lib/constants";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
  display: "swap",
});

const siteUrl = SITE_URL;
const siteName = SITE_NAME;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Jual Proton Miri — dapatkan anggaran full loan kereta Proton idaman anda. Senang loan Miri Proton bersama Sheenalina Simon, Sales Advisor Proton Miri Sarawak. Proses mudah, tiada dokumen rumit.",
  applicationName: siteName,
  keywords: [
    "Proton Miri",
    "Proton Miri sales",
    "jual Proton Miri",
    "loan Proton Miri",
    "full loan Proton Miri",
    "senang loan Miri Proton",
    "Sheenalina Simon",
    "Proton JL Motors",
    "Proton Sarawak",
    "beli kereta Proton Miri",
    "kira bulanan Proton",
    "Proton loan calculator",
    "Proton X50",
    "Proton S70",
    "Proton Saga",
    "Proton Persona",
  ],
  authors: [{ name: "Sheenalina Simon" }],
  creator: "Sheenalina Simon",
  publisher: "Sheenalina Simon",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    siteName,
    title: "Proton Miri | Sheenalina Simon",
    description:
      "Jual Proton Miri — full loan kereta Proton idaman anda. Senang loan Miri Proton bersama Sheenalina Simon, Sales Advisor Proton Miri Sarawak. Proses mudah, tiada dokumen.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proton Miri | Sheenalina Simon",
    description:
      "Jual Proton Miri — full loan kereta Proton idaman anda. Senang loan Miri Proton bersama Sheenalina Simon, Sales Advisor Proton Miri Sarawak.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "theme-color": "#080c12",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sheenalina Simon — Proton Miri",
    description: "Jual Proton Miri — Sales Advisor Proton Miri Sarawak. Full loan, senang loan untuk semua model Proton. Hubungi Sheenalina Simon sekarang.",
    url: siteUrl,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    image: "/og-image.jpg",
    areaServed: {
      "@type": "City",
      name: "Miri",
      addressCountry: "MY",
    },
    hasMap: "https://www.google.com/maps?q=" + SHOWROOM.lat + "," + SHOWROOM.lng,
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOWROOM.address.split(", ")[0],
      addressLocality: "Miri",
      addressRegion: "Sarawak",
      postalCode: "98000",
      addressCountry: "MY",
    },
    priceRange: "RM40,000 – RM130,000",
    openingHours: "Mo-Sa 08:00-17:00",
    parentOrganization: {
      "@type": "AutoDealer",
      name: "Proton JL Motors 3S Piasau",
    },
  };

  return (
    <html lang="ms" suppressHydrationWarning data-theme="dark" className={`h-full antialiased ${orbitron.variable} ${inter.variable} ${lavishly.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-theme text-theme-90">
        {/* Skip to content — keyboard nav */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-bold focus:outline-none"
        >
          Skip to content
        </a>
        {/* JSON-LD structured data for SEO — safe static object */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
