import type { Metadata } from "next";
import { Orbitron, Inter, Alex_Brush, Lavishly_Yours } from "next/font/google";
import ErrorBoundary from "@/components/error-boundary";
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

const signature = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
  display: "swap",
});

const siteUrl = "https://protonmiri.com.my";
const siteName = "Proton Miri | Sheenalina Simon";

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
    telephone: "+60198543110",
    email: "sheenalinasimon@gmail.com",
    image: "/og-image.jpg",
    areaServed: {
      "@type": "City",
      name: "Miri",
      addressCountry: "MY",
    },
    hasMap: "https://www.google.com/maps?q=4.4321155,114.0042754",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lot 1893, Jalan Bulatan, Piasau Industrial Estate",
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
    <html lang="ms" suppressHydrationWarning data-theme="dark" className={`h-full antialiased ${orbitron.variable} ${inter.variable} ${signature.variable} ${lavishly.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-theme text-theme-90">
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
