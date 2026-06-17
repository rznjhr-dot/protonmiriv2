"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, X, Info, Star, Shield, FileText } from "lucide-react";
import Hero from "@/components/hero";
import VehicleCard from "@/components/vehicle-card";
import MapSection from "@/components/map-section";
import BookTestDrive from "@/components/book-test-drive";
import Calculator from "@/components/calculator";
import LegalModal from "@/components/legal-modal";
import BackToTop from "@/components/back-to-top";
import { useEscapeKey } from "@/lib/use-key";
import { models } from "@/lib/vehicles";
import { WHATSAPP_URL, EMAIL } from "@/lib/constants";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => setSelectedId(null), []);

  const selectedModel = selectedId
    ? models.find((m) => m.id === selectedId)
    : null;

  useEscapeKey(!!selectedModel, handleClose);
  useEscapeKey(!!legalModal, () => setLegalModal(null));

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-theme backdrop-blur-xl border-b border-theme">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm text-white">
            <img src="/proton-logo.png" alt="Proton" className="h-6 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all"
            >
              <Phone size={11} />
              Contact Me
            </a>
            <a
              href={"mailto:" + EMAIL}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <Hero />

      {/* Vehicle Section — Model Grid */}
      <section
        id="vehicles"
        className="relative px-6 pt-16 md:pt-24 pb-0"
        style={{ backgroundColor: "#080c12" }}
      >
        <div className="absolute inset-0 honeycomb-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-amber-500/[0.02]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080c12] to-transparent" />

        <div className="max-w-6xl mx-auto relative">
          {/* Section header */}
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-5 border border-blue-500/15 uppercase tracking-wide"
            >
              <Star className="w-3 h-3" />
              Teroka Model Proton
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-theme-90 mb-1"
            >
              Cari Model Ideal Anda
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-sm text-white/40"
            >
              Klik mana-mana model untuk kira anggaran bulanan
            </motion.p>
          </div>

          {/* Model Grid */}
          <div className="flex flex-wrap justify-center -mx-1.5">
            {models.map((m, i) => (
              <div key={m.id} className="w-1/2 lg:w-1/3 px-1.5 mb-6">
                <VehicleCard
                  model={m}
                  isSelected={selectedId === m.id}
                  onSelect={handleSelect}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <MapSection />

      {/* Book Test Drive */}
      <BookTestDrive />
      </main>

      {/* Footer */}
      <footer className="border-t border-theme bg-theme-section py-10 px-6 text-center text-sm text-theme-40">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Disclaimer */}
          <div className="max-w-2xl mx-auto text-[11px] leading-relaxed text-theme-40 space-y-2">
            <p className="flex items-center justify-center gap-1.5 font-semibold text-theme-50">
              <Info size={13} className="shrink-0" />
              Anggaran bulanan adalah untuk rujukan awal sahaja.
            </p>
            <p>
              Pengiraan menggunakan kaedah Flat Rate (Original Rate) untuk pembiayaan hire purchase di Malaysia, berdasarkan deposit yang anda masukkan, rebate semasa, tempoh pembiayaan, dan kadar interest yang dipaparkan. Ini bukan nasihat kewangan di bawah Akta Perlindungan Pengguna 1999 (Akta 599).
            </p>
            <p>
              Harga, rebate, promosi dan spesifikasi kenderaan adalah tertakluk kepada perubahan tanpa notis. Gambar yang dipaparkan adalah untuk ilustrasi sahaja dan mungkin berbeza daripada unit sebenar. Stok dan warna adalah tertakluk kepada ketersediaan semasa.
            </p>
            <p>
              Kelulusan pembiayaan sebenar adalah tertakluk kepada penilaian bank, rekod CCRIS/CTOS, komitmen kewangan semasa, dan kadar pembiayaan yang berkuat kuasa pada masa permohonan. Anggaran yang dipaparkan bukanlah tawaran pinjaman atau kelulusan pembiayaan yang mengikat.
            </p>
            <p>
              Anggaran nilai trade-in adalah indikatif dan tertakluk kepada penilaian fizikal kenderaan oleh pasukan kami. Booking test drive adalah tertakluk kepada ketersediaan slot dan pengesahan daripada pihak kami.
            </p>
            <p>
              Untuk penilaian yang lebih tepat berdasarkan profil kewangan anda, sila hubungi sales advisor kami di Proton Miri.
            </p>
          </div>

          <div className="space-y-1 pt-4 border-t border-theme/20">
            <p>&copy; 2026 Sheenalina Simon. All rights reserved.</p>
            <p>Proton JL Motors 3S Piasau · Lot 1893, Jalan Bulatan, Piasau Industrial Estate, 98000 Miri, Sarawak</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setLegalModal("privacy")}
                className="inline-flex items-center gap-1 text-[11px] text-theme-50 hover:text-blue-400 transition-colors underline underline-offset-2 decoration-white/10 hover:decoration-blue-400/30"
              >
                <Shield size={11} />
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal("terms")}
                className="inline-flex items-center gap-1 text-[11px] text-theme-50 hover:text-blue-400 transition-colors underline underline-offset-2 decoration-white/10 hover:decoration-blue-400/30"
              >
                <FileText size={11} />
                Terms of Use
              </button>

            </div>
          </div>
        </div>
      </footer>

      {/* ── Legal Modal ── */}
      <LegalModal modal={legalModal} onClose={() => setLegalModal(null)} />

      {/* ── Calculator Modal ── */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-5 md:p-6"
              style={{
                backgroundColor: "var(--cz-bg-alt)",
                border: "1px solid rgba(37,99,235,0.2)",
                boxShadow: "0 0 80px rgba(37,99,235,0.1)",
              }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-theme-50 hover:text-theme-90 hover:bg-white/5 transition-colors z-10"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-3 text-center">
                <h3 className="text-xl font-black text-theme-90">
                  {selectedModel.name}
                </h3>
                <p className="text-xs text-theme-50 mt-0.5">
                  {selectedModel.category}
                </p>
                <a
                  href={selectedModel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-[10px] font-medium text-blue-400/70 hover:text-blue-400 transition-colors"
                >
                  Learn More
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              {/* Image preview */}
              <div
                className="w-full rounded-xl overflow-hidden bg-black/40 mb-4"
                style={{ aspectRatio: "2572/1200" }}
              >
                <img
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Loan Calculator heading */}
              <h3
                className="text-lg font-black text-center text-theme-90 mb-3 tracking-wide"
              >
                Anggaran Bulanan Anda
              </h3>

              {/* Calculator */}
              <Calculator key={selectedModel.id} model={selectedModel} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Back to Top ── */}
      <BackToTop />
    </>
  );
}
