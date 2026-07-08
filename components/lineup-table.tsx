"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { models } from "@/lib/vehicles";
import { fmt, getMinMonthly } from "@/lib/finance";

const RED = "rgba(239,68,68,0.9)";

/* ── Helper: cheapest variant for each model ── */
function cheapestVariant(model: (typeof models)[number]) {
  return model.variants.reduce((a, b) =>
    a.otr - a.rebate < b.otr - b.rebate ? a : b
  );
}

/* ── Row ── */
function Row({
  model,
  index,
}: {
  model: (typeof models)[number];
  index: number;
}) {
  const entry = cheapestVariant(model);
  const monthly = getMinMonthly(model);
  const hasPromo = model.variants.some((v) => v.promo);

  return (
    <tr className="group transition-colors duration-200 hover:bg-blue-500/[0.04]">
      <td className="py-3 px-3 md:px-4">
        <div className="flex items-center gap-2.5 md:gap-3">
          <div className="w-10 h-7 md:w-14 md:h-10 shrink-0 rounded-md overflow-hidden bg-black/30">
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="text-xs md:text-sm font-bold text-white/90 leading-tight">
              {model.name.replace("Proton ", "")}
            </div>
            <div className="text-[9px] md:text-[10px] text-white/40 font-medium leading-tight mt-0.5">
              {model.category}
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-2 md:px-4 text-center">
        <span className="text-[11px] md:text-sm font-semibold text-white/80 tabular-nums">
          RM{fmt(entry.otr)}
        </span>
        <div className="text-[9px] md:text-[10px] text-white/30">
          {entry.name}
        </div>
      </td>
      <td className="py-3 px-2 md:px-4 text-center">
        <span className="text-[11px] md:text-sm font-semibold tabular-nums" style={{ color: RED }}>
          -RM{fmt(entry.rebate)}
        </span>
      </td>
      <td className="py-3 px-2 md:px-4 text-center">
        <span className="text-xs md:text-base font-black text-emerald-400 tabular-nums">
          RM{fmt(monthly)}
          <span className="text-[9px] md:text-[11px] font-medium text-emerald-400/60">/mo</span>
        </span>
      </td>
      <td className="py-3 px-2 md:px-4 text-center hidden sm:table-cell">
        {hasPromo ? (
          <span className="inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/20 text-amber-300/80 text-[8px] md:text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Servis Percuma
          </span>
        ) : (
          <span className="text-[9px] md:text-[10px] text-white/20">—</span>
        )}
      </td>
    </tr>
  );
}

/* ── Table ── */
export default function LineupTable() {
  return (
    <section className="relative px-6 py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: "#080c12" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.015] via-transparent to-amber-500/[0.015]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-5 border border-blue-500/15 uppercase tracking-wide">
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
            Lineup Lengkap Proton
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white/90 mb-1">
            Semua Model Semasa
          </h2>
          <p className="text-sm text-white/40">
            Kalkulasi bulanan berdasarkan 90% pinjaman, 9 tahun, rebate semasa
          </p>
        </motion.div>

        {/* Table */}
        <Link
          href="/lineup"
          className="block rounded-xl overflow-hidden transition-all duration-200 hover:ring-1 hover:ring-blue-500/20 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)] group cursor-pointer"
          style={{
            border: "1px solid var(--cz-border)",
            backgroundColor: "var(--cz-section)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              {/* Header */}
              <thead>
                <tr
                  className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/30"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <th className="py-3 px-3 md:px-4 font-medium">Model</th>
                  <th className="py-3 px-2 md:px-4 text-center font-medium">OTR</th>
                  <th className="py-3 px-2 md:px-4 text-center font-medium">Rebate</th>
                  <th className="py-3 px-2 md:px-4 text-center font-medium">Bulanan</th>
                  <th className="py-3 px-2 md:px-4 text-center font-medium hidden sm:table-cell">Promo</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m, i) => (
                  <Row key={m.id} model={m} index={i} />
                ))}
              </tbody>
            </table>
          </div>
        </Link>

        {/* Footnote */}
        <p className="text-[10px] md:text-[11px] text-white/20 text-center mt-4 leading-relaxed">
          * Anggaran bulanan berdasarkan 90% loan, 9 tahun, dan rebate semasa. Kadar interest tertakluk kepada model. Servis percuma untuk varian terpilih.
        </p>

        {/* Cue to full lineup */}
        <div className="flex justify-center mt-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-blue-400/40">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
            </svg>
            Klik untuk semua varian & spesifikasi lengkap
          </span>
        </div>
      </div>
    </section>
  );
}
