"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Star } from "lucide-react";

const LAT = 4.4321155;
const LNG = 114.0042754;

const GMAPS_URL = `https://www.google.com/maps?q=${LAT},${LNG}`;
const GMAPS_EMBED = `https://www.google.com/maps?q=${LAT},${LNG}&output=embed`;
const WAZE_URL = `https://www.waze.com/ul?ll=${LAT},${LNG}&navigate=yes`;

export default function MapSection() {
  return (
    <section className="relative px-6 py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c12] via-[#0a1020] to-[#080c12]" />
      <div className="absolute inset-0 honeycomb-bg opacity-20" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-5 border border-blue-500/15 uppercase tracking-wide"
          >
            <MapPin className="w-3 h-3" />
            Lokasi Showroom
          </motion.span>
        </div>

        {/* Map + Info row */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/[0.06] bg-black/40 min-h-[300px] md:min-h-[320px] [&_iframe]:invert-[0.88] [&_iframe]:hue-rotate-180"
          >
            <iframe
              src={GMAPS_EMBED}
              className="w-full h-full"
              style={{ minHeight: "300px" }}
              loading="lazy"
              allowFullScreen
              title="Proton JL Motors 3S Piasau"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4"
          >
            {/* Address card */}
            <div className="rounded-xl p-5 bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-theme-90">
                    Proton JL Motors 3S Piasau
                  </h4>
                  <p className="text-xs text-theme-50 mt-0.5">
                    Sales · Service · Spare Parts
                  </p>
                  <p className="text-xs text-theme-60 leading-relaxed mt-2 max-w-xs">
                    Lot 1893, Jalan Bulatan, Piasau Industrial Estate, 98000 Miri, Sarawak
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-semibold hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
              >
                <MapPin size="16" />
                Buka di Google Maps
                <ExternalLink size="13" className="opacity-60" />
              </a>
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-blue-600/5 border border-white/[0.06] text-white/70 text-sm font-semibold hover:bg-blue-600/15 hover:text-blue-400 hover:border-blue-500/25 transition-all"
              >
                <Navigation size="16" />
                Navigate with Waze
                <ExternalLink size="13" className="opacity-60" />
              </a>
            </div>

            {/* Google Rating */}
            <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJN5byVN1OHzIRFAs31kqEoPc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 group"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                  {/* Half star */}
                  <Star
                    size={14}
                    className="text-amber-400"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                    fill="currentColor"
                  />
                  <Star size={14} className="text-white/15" />
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-theme-90">4.5</span>
                  <span className="text-theme-50">·</span>
                  <span className="text-theme-50 group-hover:text-blue-400 transition-colors">
                    117 reviews
                  </span>
                  <ExternalLink size="10" className="text-theme-40 group-hover:text-blue-400 transition-colors" />
                </div>
              </a>
            </div>

            <p className="text-[11px] text-center text-theme-40 mt-1">
              Ikut Waze / Google Maps terus ke showroom
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
