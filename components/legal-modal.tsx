"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, FileText } from "lucide-react";

interface Props {
  modal: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModal({ modal, onClose }: Props) {
  return (
    <AnimatePresence>
      {modal && (
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
            onClick={onClose}
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
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-lg text-theme-50 hover:text-theme-90 hover:bg-white/5 transition-colors z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {modal === "privacy" ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Shield size={18} className="text-blue-400" />
                  <h3 className="text-lg font-bold text-theme-90">Privacy Policy</h3>
                </div>
                <div className="space-y-3 text-[13px] leading-relaxed text-theme-70">
                  <p><strong>Personal Data Protection Notice</strong></p>
                  <p>This Privacy Policy explains how your personal data is collected, used, and protected when you use the Proton Loan Calculator website, in compliance with the Personal Data Protection Act 2010 (PDPA) including the Personal Data Protection (Amendment) Act 2024 (Act A1727).</p>
                  <p><strong>Data Controller</strong></p>
                  <p>Sheenalina Simon · Proton JL Motors 3S Piasau<br />Lot 1893, Jalan Bulatan, Piasau Industrial Estate<br />98000 Miri, Sarawak<br />WhatsApp: 019-8543110</p>
                  <p><strong>Data Protection Officer (DPO)</strong></p>
                  <p>In accordance with the PDPA (Amendment) Act 2024 effective 1 June 2025, we have appointed a Data Protection Officer. For all data protection matters, including requests to access, correct, or delete your personal data, please contact:<br />Email: sheenalinasimon@gmail.com<br />WhatsApp: 019-8543110</p>
                  <p><strong>Data We Collect</strong></p>
                  <p>We collect the information you voluntarily provide through the loan calculator, including: vehicle model selection, downpayment amount, loan tenure, and any details you include in WhatsApp inquiries. We do not collect sensitive personal data such as your IC number, income, or banking details through this website.</p>
                  <p><strong>How We Use Your Data</strong></p>
                  <p>Your data is used solely to generate loan estimates and facilitate communication between you and our sales team via WhatsApp. We do not store, share, rent, or sell your personal information to third parties.</p>
                  <p><strong>Data Transmission &amp; Cross-Border Transfer</strong></p>
                  <p>When you click &ldquo;WhatsApp for Enquiry&rdquo; or &ldquo;Place Booking&rdquo;, your information is transmitted via WhatsApp (Meta Platforms Inc.), which uses end-to-end encryption. Any cross-border data transfer complies with the PDPA cross-border transfer requirements effective 1 April 2025, including adequate protection safeguards. No data is retained on our website servers beyond your active browsing session.</p>
                  <p><strong>Data Breach Notification</strong></p>
                  <p>In the event of a personal data breach that may result in significant harm to data subjects, we will notify the Personal Data Protection Commissioner and affected individuals as soon as practicable, in accordance with the mandatory data breach notification requirements effective 1 June 2025.</p>
                  <p><strong>Your Rights (PDPA)</strong></p>
                  <p>In accordance with the Personal Data Protection Act 2010 (PDPA) and the Amendment Act 2024, you have the right to:</p>
                  <p>&bull; Access your personal data held by us<br />&bull; Correct any inaccurate or incomplete data<br />&bull; Withdraw consent for processing (subject to legal restrictions)<br />&bull; Request data portability to another data controller, where technically feasible (effective 1 June 2025)<br />&bull; Limit processing of your data</p>
                  <p>To exercise these rights, please contact our DPO using the details above.</p>
                  <p><strong>Data Retention</strong></p>
                  <p>Personal data is retained only for the duration of your active session. WhatsApp messages are retained subject to WhatsApp&rsquo;s own data retention policies. We do not operate a separate database of user data.</p>
                  <p><strong>Consent</strong></p>
                  <p>By using this website and submitting your information, you consent to the collection and processing of your data as described in this policy.</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={18} className="text-blue-400" />
                  <h3 className="text-lg font-bold text-theme-90">Terms of Use</h3>
                </div>
                <div className="space-y-3 text-[13px] leading-relaxed text-theme-70">
                  <p><strong>1. General &amp; Acceptance</strong></p>
                  <p>By accessing and using the Proton Loan Calculator website (&ldquo;this Website&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use immediately. These Terms are governed by the Electronic Commerce Act 2006 (Act 658), which recognises the validity of contracts formed electronically.</p>
                  <p><strong>2. Loan Estimates &amp; Financial Disclaimers</strong></p>
                  <p>All loan calculations, monthly instalment figures, and financing estimates provided on this Website are for preliminary reference purposes only. They do not constitute a binding financing offer or loan approval. Calculations use the Flat Rate (Original Rate) method commonly used for hire purchase financing in Malaysia. This Website does not provide financial advice. You are advised to seek independent financial consultation for any financing decisions.</p>
                  <p><strong>3. Consumer Protection Act 1999 (Act 599)</strong></p>
                  <p>This Website complies with the Consumer Protection Act 1999. The estimates provided are subject to Section 12 of the CPA 1999 regarding misleading price indications — all figures are clearly identified as estimates only. Any terms or conditions on this Website that may be considered unfair under Part IIIA of the CPA 1999 shall be severable and of no effect to the extent of such unfairness.</p>
                  <p><strong>4. Consumer Credit Act 2025 (Act 873)</strong></p>
                  <p>This Website is a preliminary estimation tool and does not itself extend credit, offer financing, or act as a credit service provider under the Consumer Credit Act 2025 (effective 1 March 2026). All financing arrangements are handled directly by licensed financial institutions in accordance with applicable laws.</p>
                  <p><strong>5. Accuracy of Information</strong></p>
                  <p>While we strive for accuracy, vehicle prices, rebates, interest rates, and specifications displayed are subject to change without prior notice. You are advised to confirm all figures directly with our sales team. We make no representation or warranty as to the completeness, accuracy, or currency of any information on this Website.</p>
                  <p><strong>6. Bank Approval &amp; Financing</strong></p>
                  <p>Actual financing approval, interest rates, and loan terms are determined solely by financial institutions based on their assessment of your CCRIS/CTOS records, financial commitments, and creditworthiness. This Website does not guarantee financing approval from any bank or financial institution.</p>
                  <p><strong>7. Intellectual Property</strong></p>
                  <p>All content on this Website, including but not limited to text, graphics, logos, images, software, and the overall design, is protected under the Copyright Act 1987 (Act 332) (as amended by the Copyright (Amendment) Act 2022) and the Trade Marks Act 2019 (Act 815). Proton brand, logos, and vehicle images are trademarks of Proton Holdings Berhad. Unauthorised reproduction, distribution, modification, or commercial use of any content is strictly prohibited.</p>
                  <p><strong>8. Prohibited Uses</strong></p>
                  <p>You agree not to: (a) use this Website for any unlawful purpose; (b) attempt to scrape, crawl, or extract data using automated means; (c) interfere with the functioning of this Website; (d) misrepresent your identity or the purpose of your inquiry; or (e) use this Website to distribute malware or harmful code.</p>
                  <p><strong>9. Disclaimer of Warranties</strong></p>
                  <p>This Website and all content, estimates, and materials are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose, to the fullest extent permitted by Malaysian law.</p>
                  <p><strong>10. Limitation of Liability</strong></p>
                  <p>To the maximum extent permitted by law, including under the Consumer Protection Act 1999, we shall not be held liable for any loss, damage, or inconvenience arising from the use of this Website or reliance on the estimates provided. This limitation applies to all claims, whether in contract, tort (including negligence), or otherwise.</p>
                  <p><strong>11. Governing Law &amp; Jurisdiction</strong></p>
                  <p>These Terms of Use shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Sarawak.</p>
                  <p><strong>12. Changes to Terms</strong></p>
                  <p>We reserve the right to update these Terms at any time. Continued use of the Website after changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.</p>
                  <p><strong>13. Contact</strong></p>
                  <p>For any questions regarding these Terms of Use, or for any legal or compliance inquiries, please contact:<br />Sheenalina Simon · Proton JL Motors 3S Piasau<br />Lot 1893, Jalan Bulatan, Piasau Industrial Estate<br />98000 Miri, Sarawak<br />WhatsApp: 019-8543110</p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
