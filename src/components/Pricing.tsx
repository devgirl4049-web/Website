import { Check, X, Shield, Sparkles, AlertCircle } from "lucide-react";
import { PRICING_PLANS } from "../data";
import { motion } from "motion/react";

interface PricingProps {
  onOpenLeadForm: () => void;
}

export default function Pricing({ onOpenLeadForm }: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800/50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full">
            INVEST IN YOUR FUTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Simple, Transparent, One-Time Pricing
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-xs sm:text-sm">
            No recurring monthly subscriptions. Pay once, learn forever. Sign up today to secure coupon code discounts.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -5 }}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? "bg-white dark:bg-slate-850 border-2 border-blue-600 dark:border-blue-500 shadow-2xl scale-102 z-10"
                    : "bg-white dark:bg-slate-850 border border-slate-150/70 dark:border-slate-800 shadow-sm"
                }`}
              >
                {/* Popular Highlight Tag */}
                {isPopular && plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-extrabold text-[10px] tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </span>
                )}

                {/* Header Information */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    
                    {isPopular && (
                      <span className="text-[10px] font-bold text-blue-600 dark:text-sky-400 uppercase bg-blue-50 dark:bg-blue-950/40 p-1 rounded-md">
                        Most Enrolled
                      </span>
                    )}
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm h-12 overflow-hidden leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="pt-2 border-b border-slate-100 dark:border-slate-850 pb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                        ₹{plan.price}
                      </span>
                      <span className="text-slate-400 text-xs font-semibold">
                        / {plan.period}
                      </span>
                    </div>
                    
                    {/* Urgency promo badge inside plan */}
                    <span className="text-[10px] font-bold text-orange-650 dark:text-orange-400 bg-orange-100/40 dark:bg-orange-950/20 p-1 rounded inline-block mt-2">
                      🔥 Special Limited Launch Scholarship Fee
                    </span>
                  </div>

                  {/* Feature lists Checklist */}
                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] uppercase font-bold text-slate-450 tracking-wider">
                      What's Included in {plan.name}:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-350">
                          <div className="w-4 h-4 rounded-full bg-blue-50 dark:bg-slate-900 flex-shrink-0 flex items-center justify-center text-blue-600 dark:text-blue-450 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call Action Enroll Button */}
                <div className="pt-8 mt-auto">
                  <button
                    onClick={onOpenLeadForm}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md cursor-pointer text-center ${
                      isPopular
                        ? "bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
                    100% Risk Free • Instant dashboard unlock
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global Security Assurances Banner */}
        <div className="mt-12 bg-white dark:bg-slate-850 p-4 sm:p-6 rounded-2xl border border-slate-150/70 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm text-slate-850 dark:text-slate-150">Guaranteed Secure Enrollment Sandbox</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">All registrations are processed through RBI-approved Payment Gateways.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded">UPI Accepted</span>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded">Net Banking</span>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded">Cards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
