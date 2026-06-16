"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { models } from "@/lib/vehicles";

export default function BookTestDrive() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !phone.trim() || !model) return;

      const msg = [
        "Hi Sheena,",
        "",
        "Saya nak book test drive!",
        "",
        "Nama: " + name.trim(),
        "Telefon: " + phone.trim(),
        "Model: " + model,
        "",
        "Boleh bantu saya booking test drive? Terima kasih!",
      ].join("\n");

      window.open(
        "https://wa.me/60198543110?text=" + encodeURIComponent(msg),
        "_blank"
      );

      setSubmitted(true);
      setName("");
      setPhone("");
      setModel("");
      setTimeout(() => setSubmitted(false), 3000);
    },
    [name, phone, model]
  );

  return (
    <section className="relative px-6 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c12] via-[#0a1020] to-[#080c12]" />
      <div className="absolute inset-0 honeycomb-bg opacity-20" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-5 border border-emerald-500/15 uppercase tracking-wide"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Book Test Drive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-theme-90 mb-2"
          >
            Cuba Sendiri Sebelum Beli
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-white/50 max-w-lg mx-auto"
          >
            Isi butiran di bawah, kami akan atur jadual test drive untuk anda
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 space-y-4"
            style={{
              backgroundColor: "var(--cz-bg-alt)",
              border: "1px solid var(--cz-border)",
            }}
          >
            {/* Nama */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5 text-theme-50">
                Nama
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama penuh"
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-colors placeholder:text-theme-30"
                style={{
                  backgroundColor: "var(--cz-input)",
                  border: "1px solid var(--cz-border)",
                  color: "var(--cz-text-80)",
                }}
              />
            </div>

            {/* No Telefon */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5 text-theme-50">
                No Telefon
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="012-3456789"
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-colors placeholder:text-theme-30"
                style={{
                  backgroundColor: "var(--cz-input)",
                  border: "1px solid var(--cz-border)",
                  color: "var(--cz-text-80)",
                }}
              />
            </div>

            {/* Model */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5 text-theme-50">
                Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "var(--cz-input)",
                  border: "1px solid var(--cz-border)",
                  color: "var(--cz-text-80)",
                }}
              >
                <option value="" disabled className="bg-[#0c1424]">
                  Pilih model
                </option>
                {models.map((m) => (
                  <option key={m.id} value={m.name} className="bg-[#0c1424]">
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Book button */}
            <button
              type="submit"
              disabled={!name.trim() || !phone.trim() || !model}
              className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-[0_0_30px_rgba(52,211,153,0.25)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitted ? "✓ Dihantar!" : "Book Test Drive"}
            </button>

            <p className="text-[11px] text-center text-theme-40">
              Kami akan WhatsApp anda untuk sahkan booking
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
