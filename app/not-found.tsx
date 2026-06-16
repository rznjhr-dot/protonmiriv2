"use client";

import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#080c12" }}
    >
      <div className="absolute inset-0 honeycomb-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-amber-500/[0.02]" />

      <div className="relative text-center max-w-md">
        {/* Glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
          }}
        />

        {/* Code */}
        <p className="text-[120px] leading-none font-black text-blue-500/15 select-none">
          404
        </p>

        {/* Message */}
        <h1 className="text-2xl font-black text-theme-90 mt-[-10px] mb-2">
          Halaman Tidak Dijumpai
        </h1>
        <p className="text-sm text-theme-50 leading-relaxed mb-8">
          Maaf, halaman yang anda cari tidak wujud atau telah dialihkan.
          Sila kembali ke halaman utama atau hubungi kami untuk bantuan.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all"
          >
            <Home size={16} />
            Kembali ke Laman Utama
          </Link>
          <a
            href="https://wa.me/60198543110"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 border border-white/10 text-theme-70 hover:text-white hover:border-white/30 px-6 py-3 rounded-full text-sm font-medium transition-all"
          >
            <Phone size={16} />
            Hubungi Kami
          </a>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1.5 text-[11px] text-theme-50 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={12} />
            Kembali ke halaman sebelum
          </button>
        </div>
      </div>
    </div>
  );
}
