import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setActiveFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800/50 font-sans"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-xs sm:text-sm">
            Everything you need to know about the curriculum model, certification scopes, and refund policies.
          </p>
        </div>

        {/* Collapsible FAQ Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isSelected = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl bg-white dark:bg-slate-850 border transition-all ${
                  isSelected
                    ? "border-blue-600 dark:border-blue-500 shadow-md"
                    : "border-slate-150/70 dark:border-slate-800 shadow-sm"
                }`}
              >
                {/* Accordion trigger panel */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4.5 sm:px-6 sm:py-5 flex items-center justify-between text-left font-sans cursor-pointer focus:outline-none"
                  aria-expanded={isSelected}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isSelected ? "text-blue-600 dark:text-sky-400 animate-pulse" : "text-slate-400"}`} />
                    <span className="font-heading font-bold text-slate-850 dark:text-slate-150 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 hover:text-slate-600 transition-transform flex-shrink-0 ${
                      isSelected ? "transform rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Panel content */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 dark:border-slate-850">
                        <p className="text-slate-655 dark:text-slate-350 text-xs sm:text-sm leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                        
                        {/* Meta category badge within FAQ */}
                        <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400 font-bold bg-slate-50 dark:bg-slate-900 p-2 rounded-xl">
                          <span>Verified Academy Answer</span>
                          <span className="bg-slate-100 dark:bg-slate-800 p-1 px-2 rounded-md">{faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Global support query anchor */}
        <div className="mt-12 text-center bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-150/70 dark:border-slate-800 shadow-sm">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-full mb-3">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-extrabold text-sm text-slate-800 dark:text-slate-200">Still have unanswered questions on file?</h3>
          <p className="text-slate-450 dark:text-slate-400 text-xs mt-1">Our enrollment advisors are online. Reach us on live WhatsApp support or submit the lead prospectus form.</p>
          <div className="mt-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                // Scroll to whatsapp triggers or click it
                const el = document.getElementById("whatsapp-trigger");
                if (el) el.click();
              }}
              className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-650 text-white font-bold text-xs py-2 px-5 rounded-xl cursor-pointer shadow-sm transition-all"
            >
              Start Chat with Support Representative
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
