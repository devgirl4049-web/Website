import { Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by Thousands of Career Shifters
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-xs sm:text-sm">
            Read what actual graduates say about their custom learning dashboards, live projects, and placement rounds.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 relative"
            >
              {/* Custom quotation ornament */}
              <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-800 pointer-events-none">
                <MessageSquare className="w-12 h-12 stroke-current fill-transparent opacity-20" />
              </div>

              {/* Stars rating */}
              <div className="flex gap-0.5" aria-label={`Rating: ${testimonial.rating} stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Feedback text */}
              <blockquote className="text-slate-705 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic relative z-10">
                "{testimonial.feedback}"
              </blockquote>

              {/* Student info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-white dark:border-slate-800 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-heading font-extrabold text-slate-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {testimonial.role} at <span className="font-semibold text-slate-700 dark:text-slate-350">{testimonial.company}</span>
                  </p>
                  
                  {/* Badge representing course completed */}
                  <span className="inline-block mt-1 text-[9px] uppercase font-bold text-orange-655 bg-orange-100 dark:bg-orange-955/40 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded">
                    ✓ {testimonial.courseCompleted}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
