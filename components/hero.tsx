"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(8,12,18,0.85) 0%, rgba(8,12,18,0.65) 40%, rgba(8,12,18,0.75) 70%, rgba(8,12,18,0.9) 100%)",
          }}
        />
      </div>

      {/* Warm glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-blue-600 rounded-full opacity-[0.12] blur-[180px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-500 rounded-full opacity-[0.10] blur-[140px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500 rounded-full opacity-[0.08] blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 text-center">

          {/* Headline — welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-blue-400/30 to-blue-400/60" />
              <span className="text-blue-300/50 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase">
                Sales Advisor Proton Miri · Urusan Loan Mudah
              </span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-blue-400/60 via-blue-400/30 to-transparent" />
            </div>
            <h1 className="mb-2">
              <div className="text-sm sm:text-base text-white/40 font-medium tracking-[0.15em] uppercase mb-4">
                Welcome to
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white/90 mb-2">
                <span className="text-white/90">proton</span>
                <span className="text-blue-400 text-[1.15em] inline-block mx-[-0.02em]">miri</span>
                <span className="text-white/90">.com.my</span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl text-white/50 tracking-wide" style={{ fontFamily: "var(--font-lavishly)" }}>
                by Sheenalina Simon
              </div>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-8 text-balance leading-relaxed"
          >
            Kira bulanan kereta Proton idaman anda dengan mudah, mengikut bajet anda. Tiada dokumen diperlukan, tiada registration, hanya dalam masa 10 saat. Tetapkan deposit anda (atau tidak), pilih tempoh, dan terus dapat anggaran bulanan!
          </motion.p>

          {/* Browse Models CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#vehicles"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              <span className="relative z-10 flex items-center gap-2">
                Pilih & Kira
                <ArrowDown size={18} className="animate-bounce" />
              </span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {[
              { icon: "🔒", text: "Pengalaman Lebih 7 Tahun" },
              { icon: "📍", text: "Showroom Miri" },
              { icon: "🌍", text: "Servis Seluruh Sarawak" },
              { icon: "💰", text: "Deposit Dari 0%" },
              { icon: "♻️", text: "Trade-In Diterima" },
              { icon: "✅", text: "Tiada Caj Tersembunyi" },
            ].map((item) => (
              <div key={item.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-xs text-white/50">
                <span className="text-[11px]">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Thin divider */}
          <div className="w-24 h-[1.5px] mx-auto mt-10 mb-6 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-full" />

          {/* Sales Advisor card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center gap-5 mb-4"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/20">
              <img
                src="/sheena.jpg"
                alt="Sheenalina Simon"
                loading="lazy"
                className="w-full h-full object-cover scale-[1.1] object-center"
              />
            </div>
            <div className="text-left text-white/40">
              <div className="text-white/80 text-sm" style={{ fontFamily: "var(--font-lavishly)", fontSize: "1.25rem" }}>Sheenalina Simon</div>
              <div className="text-xs text-blue-400/70 font-medium">Authorised Sales Advisor</div>
              <div className="flex flex-col items-start gap-0.5 mt-1.5">
                <a
                  href="https://www.facebook.com/profile.php?id=61567956414743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-white/30 hover:text-white/60 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="#1877F2" width="11" height="11">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-white/50">Sheena Proton</span>
                </a>
                <a
                  href="https://www.tiktok.com/@sheenaproton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-white/30 hover:text-white/60 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="#EE1D52" width="11" height="11">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span className="text-white/50">@sheenaproton</span>
                </a>
              </div>
              <a
                href="https://wa.me/60198543110"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-1 bg-[#25D366] text-white px-2.5 py-0.5 rounded-lg font-semibold text-[10px] transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_16px_rgba(37,211,102,0.35)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Whatsapp Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
