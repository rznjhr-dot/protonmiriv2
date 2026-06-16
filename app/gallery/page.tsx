"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-theme backdrop-blur-xl border-b border-theme">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-white">
            <ArrowLeft size={16} />
            <span>Kembali</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">
              Facebook Gallery
            </span>
          </div>
        </div>
      </nav>

      {/* ── Facebook Section ── */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-bold mb-5 border border-[#1877F2]/15 uppercase tracking-wide"
            >
              <svg viewBox="0 0 24 24" fill="#1877F2" width="12" height="12">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Ikuti Kami di Facebook
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-black text-theme-90 mb-3"
            >
              Sheena Proton | Miri
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-sm text-white/40 max-w-lg mx-auto mb-6"
            >
              Dapatkan updates terbaru, promosi & foto delivery di Facebook
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-lg rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--cz-border)", background: "var(--cz-bg-card, #0d0d0d)" }}
            >
              <div className="relative w-full" style={{ maxHeight: "600px", overflow: "hidden" }}>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FSheena-Proton%2F61567956414743%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500"
                  height="600"
                  style={{ border: "none", overflow: "hidden", width: "100%", maxWidth: "500px" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook - Sheena Proton"
                  className="mx-auto"
                />
              </div>
              <div className="p-4 text-center border-t border-white/5">
                <a
                  href="https://www.facebook.com/people/Sheena-Proton/61567956414743/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(24,119,242,0.35)] focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow di Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
