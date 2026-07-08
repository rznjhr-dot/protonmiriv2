"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, X, Star, Grid3x3 } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/hero";
import VehicleCard from "@/components/vehicle-card";
import MapSection from "@/components/map-section";
import BookTestDrive from "@/components/book-test-drive";
import Calculator from "@/components/calculator";
import LegalModal from "@/components/legal-modal";
import BackToTop from "@/components/back-to-top";
import LineupTable from "@/components/lineup-table";
import { useEscapeKey } from "@/lib/use-key";
import { models } from "@/lib/vehicles";
import { WHATSAPP_URL, EMAIL, CONTACT, SHOWROOM } from "@/lib/constants";

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

  // Auto-open calculator from /?model=xxx
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");
    if (model && models.some((m) => m.id === model)) {
      setSelectedId(model);
    }
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-theme backdrop-blur-xl border-b border-theme">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm text-white">
            <img src="/proton-logo.png" alt="Proton" className="h-6 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <Link
              href="/lineup"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-xs"
            >
              <Grid3x3 size={12} />
              <span className="hidden sm:inline">Lineup</span>
            </Link>
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
        className="relative px-6 pt-12 md:pt-16 pb-0"
        style={{ backgroundColor: "#080c12" }}
      >
        <div className="absolute inset-0 honeycomb-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-amber-500/[0.02]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080c12] to-transparent" />

        <div className="max-w-6xl mx-auto relative">
          {/* Section header */}
          <div className="text-center mb-7">
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
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3"
            >
              <Link
                href="/lineup"
                className="inline-flex items-center gap-1 text-[11px] text-blue-400/60 hover:text-blue-400 transition-colors group"
              >
                <Grid3x3 size={11} />
                <span>Lihat perbandingan penuh semua varian</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center -mx-1">
            {models.map((m, i) => (
              <div key={m.id} className="w-1/2 lg:w-1/3 px-1 mb-3">
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

      {/* Full Lineup Table */}
      <LineupTable />

      {/* Location */}
      <MapSection />

      {/* Book Test Drive */}
      <BookTestDrive />
      </main>

      {/* Disclaimer */}
      <div className="border-t border-theme/20 bg-theme px-6 py-8">
        <div className="max-w-4xl mx-auto text-[10px] md:text-[11px] leading-relaxed text-white/20 text-center space-y-2">
          <p>
            Anggaran bulanan adalah untuk rujukan awal sahaja. Pengiraan menggunakan kaedah Flat Rate (Original Rate) untuk pembiayaan hire purchase di Malaysia. Harga, rebate, promosi dan spesifikasi kenderaan adalah tertakluk kepada perubahan tanpa notis. Kelulusan pembiayaan sebenar adalah tertakluk kepada penilaian bank, rekod CCRIS/CTOS, komitmen kewangan semasa, dan kadar pembiayaan yang berkuat kuasa pada masa permohonan.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] bg-theme-section">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
        {/* Main footer area */}
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/proton-logo.png" alt="Proton" className="h-6 w-auto" />
              </div>
              <p className="text-sm font-bold text-white/80 mb-1">
                Proton Miri
              </p>
              <p className="text-xs text-white/40 leading-relaxed max-w-xs">
                Sheenalina Simon · Sales Advisor Authorised Proton — urusan loan mudah & cepat bersama Proton JL Motors 3S Miri.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3.5">
                Menu
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Home</a>
                </li>
                <li>
                  <a href="#vehicles" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Monthly Calculator</a>
                </li>
                <li>
                  <Link href="/lineup" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Models Lineup</Link>
                </li>
                <li>
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3.5">
                Find Us
              </p>
              <div className="space-y-3 text-sm text-white/50">
                <p className="leading-relaxed text-white/60">
                  {SHOWROOM.address}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  019-854 3110
                </a>
                <div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:shadow-[0_0_35px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    WhatsApp Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent my-8" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/25">
            <p>&copy; 2026 Sheenalina Simon · Proton Miri</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLegalModal("privacy")}
                className="hover:text-white/60 transition-colors duration-200"
              >
                Privacy
              </button>
              <span className="text-white/5">·</span>
              <button
                onClick={() => setLegalModal("terms")}
                className="hover:text-white/60 transition-colors duration-200"
              >
                Terms
              </button>
              <span className="text-white/5">·</span>
              <Link href="/lineup" className="hover:text-white/60 transition-colors duration-200">
                Models Lineup
              </Link>
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
