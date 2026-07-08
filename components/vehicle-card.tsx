"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import type { Model } from "@/lib/vehicles";
import { fmt, getMinMonthly } from "@/lib/finance";

interface Props {
  model: Model;
  isSelected: boolean;
  onSelect: (id: string) => void;
  index: number;
}

/* ── Model Image ── */
function ModelImage({ src, name }: { src: string; name: string }) {
  return (
    <div className="w-full" style={{ aspectRatio: "16/9" }}>
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
}

/* ── Card ── */
export default function VehicleCard({
  model,
  isSelected,
  onSelect,
  index,
}: Props) {
  const handleClick = () => onSelect(model.id);

  const handleCalcClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(model.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col items-center w-full"
    >
      <div
        onClick={handleClick}
        onKeyDown={(e: React.KeyboardEvent) => e.key === "Enter" && handleClick()}
        role="button"
        tabIndex={0}
        className={`model-spot group ${isSelected ? "selected" : ""}`}
      >
        {/* Subtle corner glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-all duration-500" />

        {/* Image */}
        <div className="relative z-10 px-4 pt-4 pb-2">
          <ModelImage src={model.image} name={model.name} />
        </div>

        {/* Bottom section */}
        <div className="relative z-10 px-4 pb-4">
          {/* Model name + tagline */}
          <div className="text-center mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white/90 tracking-tight">
              {model.name}
            </h3>
            <p className="text-[8px] md:text-[9px] font-[family-name:var(--font-orbitron)] tracking-[0.15em] text-white/40 uppercase mt-0.5">
              {model.tagline}
            </p>
          </div>

          {/* Promo badge */}
          {model.variants.some(v => v.promo) && (
            <div className="flex items-center justify-center mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/20 text-amber-300/90 text-[8px] md:text-[9px] font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Free Service 2 Tahun*
              </span>
            </div>
          )}

          {/* Price + Calculator combined pill */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleCalcClick}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/25 text-emerald-300 font-semibold hover:from-emerald-500/30 hover:to-emerald-600/20 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-emerald-400/70">
                Dari
              </span>
              <span className="text-xs md:text-sm font-black text-emerald-300 tabular-nums">
                RM{fmt(getMinMonthly(model))}<span className="text-[9px] md:text-[10px] font-medium text-emerald-400/70 ml-0.5">/mo</span>
              </span>
              <span className="w-px h-3 md:h-4 bg-emerald-500/20" />
              <Calculator size={12} className="md:w-[15px] text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
