"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowLeft, Calculator } from "lucide-react";
import { models } from "@/lib/vehicles";
import type { Variant } from "@/lib/vehicles";
import { calculateFinance, fmt, fmtDec, getMinMonthly } from "@/lib/finance";
import { WHATSAPP_URL, EMAIL } from "@/lib/constants";

const RED = "rgba(239,68,68,0.9)";

/* ── Variant Row ── */
function VariantRow({
  variant,
  modelName,
  modelId,
  interestRate,
}: {
  variant: Variant;
  modelName: string;
  modelId: string;
  interestRate: number;
}) {
  const result = calculateFinance({
    otr: variant.otr,
    rebate: variant.rebate,
    rebateEnabled: true,
    depositPercent: 10,
    customDeposit: null,
    tenure: 9,
    interestRate,
  });

  return (
    <tr className="group transition-colors duration-200 hover:bg-blue-500/[0.04]">
      <td className="py-2.5 px-3 md:px-4">
        <div className="text-xs md:text-sm font-semibold text-white/90">
          {variant.name}
        </div>
        <div className="text-[9px] md:text-[10px] text-white/40 mt-0.5">
          {variant.engine} · {variant.transmission}
        </div>
      </td>
      <td className="py-2.5 px-2 md:px-4 text-center">
        <span className="text-[11px] md:text-sm font-semibold text-white/80 tabular-nums">
          RM{fmt(variant.otr)}
        </span>
      </td>
      <td className="py-2.5 px-2 md:px-4 text-center">
        <span
          className="text-[11px] md:text-sm font-semibold tabular-nums"
          style={{ color: RED }}
        >
          -RM{fmt(variant.rebate)}
        </span>
      </td>
      <td className="py-2.5 px-2 md:px-4 text-center hidden sm:table-cell">
        <span className="text-[11px] md:text-sm text-white/70 tabular-nums">
          {variant.engine}
        </span>
      </td>
      <td className="py-2.5 px-2 md:px-4 text-center">
        <span className="text-xs md:text-base font-black text-emerald-400 tabular-nums whitespace-nowrap">
          RM{fmt(result.monthly)}
          <span className="text-[9px] md:text-[11px] font-medium text-emerald-400/60">/mo</span>
        </span>
      </td>
      <td className="py-2.5 px-2 md:px-4 text-center">
        {variant.promo ? (
          <span className="inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/20 text-amber-300/80 text-[8px] md:text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Servis Percuma
          </span>
        ) : (
          <span className="text-[9px] md:text-[10px] text-white/20">—</span>
        )}
      </td>
      <td className="py-2.5 px-1 md:px-3 text-center">
        <Link
          href={`/?model=${modelId}`}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/15 border border-blue-500/20 text-blue-400 hover:bg-blue-500/25 transition-colors text-[10px] md:text-xs font-semibold whitespace-nowrap"
        >
          <Calculator size={10} />
          Kira
        </Link>
      </td>
    </tr>
  );
}

/* ── Model Section ── */
function ModelSection({
  model,
  index,
}: {
  model: (typeof models)[number];
  index: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="mb-10 last:mb-0"
    >
      {/* Model header */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-5">
        <div className="w-full sm:w-64 shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
          <img
            src={model.image}
            alt={model.name}
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9" }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl font-black text-white/90">
            {model.name}
          </h2>
          <p className="text-[10px] md:text-xs font-[family-name:var(--font-orbitron)] tracking-[0.15em] text-white/40 uppercase mt-0.5">
            {model.tagline}
          </p>
          <p className="text-[11px] md:text-sm text-white/50 mt-1">
            {model.category} · Dari RM{fmt(getMinMonthly(model))}/mo · {model.interestRate}% interest
          </p>
          <a
            href={model.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-medium text-emerald-400/80 hover:text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] transition-all group"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>Spesifikasi Rasmi</span>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Variants table */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: "1px solid var(--cz-border)",
          backgroundColor: "var(--cz-section)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr
                className="text-[9px] md:text-xs font-semibold uppercase tracking-widest text-white/30"
                style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <th className="py-2.5 px-3 md:px-4 font-medium">Varian</th>
                <th className="py-2.5 px-2 md:px-4 text-center font-medium">OTR</th>
                <th className="py-2.5 px-2 md:px-4 text-center font-medium">Rebate</th>
                <th className="py-2.5 px-2 md:px-4 text-center font-medium hidden sm:table-cell">Enjin</th>
                <th className="py-2.5 px-2 md:px-4 text-center font-medium">Bulanan</th>
                <th className="py-2.5 px-2 md:px-4 text-center font-medium">Promo</th>
                <th className="py-2.5 px-1 md:px-3 text-center font-medium">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {model.variants.map((v, i) => (
                <VariantRow
                  key={v.id}
                  variant={v}
                  modelName={model.name}
                  modelId={model.id}
                  interestRate={model.interestRate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
}

/* ── Page ── */
export default function LineupPage() {
  return (
    <>
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-theme backdrop-blur-xl border-b border-theme">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Kembali</span>
          </Link>
          <a href="/" className="flex items-center gap-2 text-sm text-white">
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

      <main id="main-content" className="pt-14">
        {/* Hero section */}
        <section className="relative px-6 pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundColor: "#080c12" }} />
          <div className="absolute inset-0 honeycomb-bg opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-amber-500/[0.02]" />

          <div className="relative max-w-6xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-5 border border-blue-500/15 uppercase tracking-wide"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
              Lineup Proton
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white/90 mb-3"
            >
              Semua Model & Varian
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-white/50 max-w-2xl mx-auto"
            >
              Teroka kesemua model Proton dengan setiap varian — harga OTR, rebate, spesifikasi, dan anggaran bulanan. Klik "Kira" untuk terus WhatsApp Sheenalina.
            </motion.p>
          </div>
        </section>

        {/* Models list */}
        <section className="relative px-6 pb-16 md:pb-24">
          <div className="absolute inset-0" style={{ backgroundColor: "#080c12" }} />
          <div className="max-w-6xl mx-auto relative">
            {models.map((m, i) => (
              <ModelSection key={m.id} model={m} index={i} />
            ))}

            {/* Footnote */}
            <p className="text-[10px] md:text-[11px] text-white/20 text-center mt-8 leading-relaxed">
              * Anggaran bulanan berdasarkan 90% loan, 9 tahun, 10% deposit, dan rebate semasa. Kadar interest tertakluk kepada model. Servis percuma untuk varian terpilih. Hubungi Sheenalina untuk pengiraan tepat mengikut profil kewangan anda.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
