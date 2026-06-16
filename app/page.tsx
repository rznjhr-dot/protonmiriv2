"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  Mail,
  X,
  Info,
  Star,
  Shield,
  FileText,
  ArrowUp,
} from "lucide-react";
import Hero from "@/components/hero";
import VehicleCard from "@/components/vehicle-card";
import MapSection from "@/components/map-section";
import BookTestDrive from "@/components/book-test-drive";
import Calculator from "@/components/calculator";
import { models } from "@/lib/vehicles";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => setSelectedId(null), []);

  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => setShowBackTop(window.scrollY > 600);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const selectedModel = selectedId
    ? models.find((m) => m.id === selectedId)
    : null;

  // Close calculator modal on Escape key
  useEffect(() => {
    if (!selectedModel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedModel, handleClose]);

  // Close legal modal on Escape key
  useEffect(() => {
    if (!legalModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLegalModal(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [legalModal]);

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
              href="https://wa.me/60198543110"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all"
            >
              <Phone size={11} />
              Contact Me
            </a>
            <a
              href="mailto:sheenalinasimon@gmail.com"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <footer className="border-t border-theme bg-theme-section py-10 px-6 text-center text-sm text-theme-40">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Disclaimer */}
          <div className="max-w-2xl mx-auto text-[11px] leading-relaxed text-theme-40 space-y-2">
            <p className="flex items-center justify-center gap-1.5 font-semibold text-theme-50">
              <Info size={13} className="shrink-0" />
              Monthly instalment estimates shown are for preliminary reference only.
            </p>
            <p>
              The calculation is based on the Flat Rate (Original Rate) method commonly used for hire purchase financing in Malaysia, using the downpayment you entered, current rebate offered, financing tenure period, and estimated interest rate applicable to the selected model as displayed in the calculator. This is not financial advice under the Consumer Protection Act 1999 (Act 599).
            </p>
            <p>
              Actual instalment and financing approval are subject to bank assessment,
              CCRIS/CTOS records, current financial commitments, and applicable
              financing rates at the time of application. The figures shown do not constitute a binding loan offer or financing approval.
            </p>
            <p>
              For a more accurate assessment based on your financial profile, please
              contact Sheenalina Simon, Proton Miri.
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
      <AnimatePresence>
        {legalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setLegalModal(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg max-h-[70vh] overflow-y-auto rounded-2xl p-6"
              style={{
                backgroundColor: "var(--cz-bg-alt)",
                border: "1px solid rgba(37,99,235,0.2)",
                boxShadow: "0 0 80px rgba(37,99,235,0.1)",
              }}
            >
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-theme-50 hover:text-theme-90 hover:bg-white/5 transition-colors z-10"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {legalModal === "privacy" ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={18} className="text-blue-400" />
                    <h3 className="text-lg font-bold text-theme-90">Privacy Policy</h3>
                  </div>
                  <div className="space-y-3 text-[13px] leading-relaxed text-theme-70">
                    <p>
                      <strong>Personal Data Protection Notice</strong>
                    </p>
                    <p>
                      This Privacy Policy explains how your personal data is collected,
                      used, and protected when you use the Proton Loan Calculator website,
                      in compliance with the Personal Data Protection Act 2010 (PDPA) including the Personal Data Protection (Amendment) Act 2024 (Act A1727).
                    </p>
                    <p>
                      <strong>Data Controller</strong>
                    </p>
                    <p>
                      Sheenalina Simon · Proton JL Motors 3S Piasau<br />
                      Lot 1893, Jalan Bulatan, Piasau Industrial Estate<br />
                      98000 Miri, Sarawak<br />
                      WhatsApp: 019-8543110
                    </p>
                    <p>
                      <strong>Data Protection Officer (DPO)</strong>
                    </p>
                    <p>
                      In accordance with the PDPA (Amendment) Act 2024 effective 1 June 2025, we have appointed a Data Protection Officer. For all data protection matters, including requests to access, correct, or delete your personal data, please contact:<br />
                      Email: sheenalinasimon@gmail.com<br />
                      WhatsApp: 019-8543110
                    </p>
                    <p>
                      <strong>Data We Collect</strong>
                    </p>
                    <p>
                      We collect the information you voluntarily provide through the loan
                      calculator, including: vehicle model selection, downpayment amount,
                      loan tenure, and any details you include in WhatsApp inquiries. We do not collect sensitive personal data such as your IC number, income, or banking details through this website.
                    </p>
                    <p>
                      <strong>How We Use Your Data</strong>
                    </p>
                    <p>
                      Your data is used solely to generate loan estimates and facilitate
                      communication between you and our sales team via WhatsApp. We do not
                      store, share, rent, or sell your personal information to third parties.
                    </p>
                    <p>
                      <strong>Data Transmission &amp; Cross-Border Transfer</strong>
                    </p>
                    <p>
                      When you click &ldquo;WhatsApp for Enquiry&rdquo; or &ldquo;Place Booking&rdquo;, your
                      information is transmitted via WhatsApp (Meta Platforms Inc.), which uses end-to-end encryption. Any cross-border data transfer complies with the PDPA cross-border transfer requirements effective 1 April 2025, including adequate protection safeguards. No data is retained on our website servers beyond your active browsing session.
                    </p>
                    <p>
                      <strong>Data Breach Notification</strong>
                    </p>
                    <p>
                      In the event of a personal data breach that may result in significant harm to data subjects, we will notify the Personal Data Protection Commissioner and affected individuals as soon as practicable, in accordance with the mandatory data breach notification requirements effective 1 June 2025.
                    </p>
                    <p>
                      <strong>Your Rights (PDPA)</strong>
                    </p>
                    <p>
                      In accordance with the Personal Data Protection Act 2010 (PDPA) and the Amendment Act 2024, you have the right to:
                    </p>
                    <p>
                      &bull; Access your personal data held by us<br />
                      &bull; Correct any inaccurate or incomplete data<br />
                      &bull; Withdraw consent for processing (subject to legal restrictions)<br />
                      &bull; Request data portability to another data controller, where technically feasible (effective 1 June 2025)<br />
                      &bull; Limit processing of your data
                    </p>
                    <p>
                      To exercise these rights, please contact our DPO using the details above.
                    </p>
                    <p>
                      <strong>Data Retention</strong>
                    </p>
                    <p>
                      Personal data is retained only for the duration of your active session. WhatsApp messages are retained subject to WhatsApp&rsquo;s own data retention policies. We do not operate a separate database of user data.
                    </p>
                    <p>
                      <strong>Consent</strong>
                    </p>
                    <p>
                      By using this website and submitting your information, you consent to the collection and processing of your data as described in this policy.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText size={18} className="text-blue-400" />
                    <h3 className="text-lg font-bold text-theme-90">Terms of Use</h3>
                  </div>
                  <div className="space-y-3 text-[13px] leading-relaxed text-theme-70">
                    <p>
                      <strong>1. General &amp; Acceptance</strong>
                    </p>
                    <p>
                      By accessing and using the Proton Loan Calculator website (&ldquo;this Website&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use immediately. These Terms are governed by the Electronic Commerce Act 2006 (Act 658), which recognises the validity of contracts formed electronically.
                    </p>
                    <p>
                      <strong>2. Loan Estimates &amp; Financial Disclaimers</strong>
                    </p>
                    <p>
                      All loan calculations, monthly instalment figures, and financing estimates provided on this Website are for preliminary reference purposes only. They do not constitute a binding financing offer or loan approval. Calculations use the Flat Rate (Original Rate) method commonly used for hire purchase financing in Malaysia. This Website does not provide financial advice. You are advised to seek independent financial consultation for any financing decisions.
                    </p>
                    <p>
                      <strong>3. Consumer Protection Act 1999 (Act 599)</strong>
                    </p>
                    <p>
                      This Website complies with the Consumer Protection Act 1999. The estimates provided are subject to Section 12 of the CPA 1999 regarding misleading price indications — all figures are clearly identified as estimates only. Any terms or conditions on this Website that may be considered unfair under Part IIIA of the CPA 1999 shall be severable and of no effect to the extent of such unfairness.
                    </p>
                    <p>
                      <strong>4. Consumer Credit Act 2025 (Act 873)</strong>
                    </p>
                    <p>
                      This Website is a preliminary estimation tool and does not itself extend credit, offer financing, or act as a credit service provider under the Consumer Credit Act 2025 (effective 1 March 2026). All financing arrangements are handled directly by licensed financial institutions in accordance with applicable laws.
                    </p>
                    <p>
                      <strong>5. Accuracy of Information</strong>
                    </p>
                    <p>
                      While we strive for accuracy, vehicle prices, rebates, interest rates, and specifications displayed are subject to change without prior notice. You are advised to confirm all figures directly with our sales team. We make no representation or warranty as to the completeness, accuracy, or currency of any information on this Website.
                    </p>
                    <p>
                      <strong>6. Bank Approval &amp; Financing</strong>
                    </p>
                    <p>
                      Actual financing approval, interest rates, and loan terms are determined solely by financial institutions based on their assessment of your CCRIS/CTOS records, financial commitments, and creditworthiness. This Website does not guarantee financing approval from any bank or financial institution.
                    </p>
                    <p>
                      <strong>7. Intellectual Property</strong>
                    </p>
                    <p>
                      All content on this Website, including but not limited to text, graphics, logos, images, software, and the overall design, is protected under the Copyright Act 1987 (Act 332) (as amended by the Copyright (Amendment) Act 2022) and the Trade Marks Act 2019 (Act 815). Proton brand, logos, and vehicle images are trademarks of Proton Holdings Berhad. Unauthorised reproduction, distribution, modification, or commercial use of any content is strictly prohibited.
                    </p>
                    <p>
                      <strong>8. Prohibited Uses</strong>
                    </p>
                    <p>
                      You agree not to: (a) use this Website for any unlawful purpose; (b) attempt to scrape, crawl, or extract data using automated means; (c) interfere with the functioning of this Website; (d) misrepresent your identity or the purpose of your inquiry; or (e) use this Website to distribute malware or harmful code.
                    </p>
                    <p>
                      <strong>9. Disclaimer of Warranties</strong>
                    </p>
                    <p>
                      This Website and all content, estimates, and materials are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose, to the fullest extent permitted by Malaysian law.
                    </p>
                    <p>
                      <strong>10. Limitation of Liability</strong>
                    </p>
                    <p>
                      To the maximum extent permitted by law, including under the Consumer Protection Act 1999, we shall not be held liable for any loss, damage, or inconvenience arising from the use of this Website or reliance on the estimates provided. This limitation applies to all claims, whether in contract, tort (including negligence), or otherwise.
                    </p>
                    <p>
                      <strong>11. Governing Law &amp; Jurisdiction</strong>
                    </p>
                    <p>
                      These Terms of Use shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Sarawak.
                    </p>
                    <p>
                      <strong>12. Changes to Terms</strong>
                    </p>
                    <p>
                      We reserve the right to update these Terms at any time. Continued use of the Website after changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.
                    </p>
                    <p>
                      <strong>13. Contact</strong>
                    </p>
                    <p>
                      For any questions regarding these Terms of Use, or for any legal or compliance inquiries, please contact:<br />
                      Sheenalina Simon · Proton JL Motors 3S Piasau<br />
                      Lot 1893, Jalan Bulatan, Piasau Industrial Estate<br />
                      98000 Miri, Sarawak<br />
                      WhatsApp: 019-8543110
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-blue-600/80 backdrop-blur-md border border-blue-400/20 text-white flex items-center justify-center hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all"
            aria-label="Kembali ke atas"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
