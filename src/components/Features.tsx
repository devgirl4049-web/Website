import { Award, ShieldAlert, Laptop, Code, Briefcase, Zap, Flame, Shield, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const featuresList = [
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: "Expert Instructors",
      description: "Learn directly from Ex-Google researchers, certified Microsoft Specialities, and leading Web contributors who design industry-level courses.",
      accentLight: "from-orange-50 to-amber-100",
      accentDark: "dark:from-orange-950/20 dark:to-orange-900/10",
      borderCol: "border-orange-100/60 dark:border-orange-950/20"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Lifetime Access",
      description: "Enroll once and get unlimited lifelong updates, dashboard access, assessments, and reference guides completely free. No subscriptions.",
      accentLight: "from-blue-50 to-sky-100",
      accentDark: "dark:from-blue-950/20 dark:to-blue-900/10",
      borderCol: "border-blue-100/60 dark:border-blue-950/20"
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Certificate of Completion",
      description: "Receive a professional shareable gold/platinum credential after making coursework progress. Boost your LinkedIn search presence.",
      accentLight: "from-emerald-50 to-teal-100",
      accentDark: "dark:from-emerald-950/20 dark:to-teal-900/10",
      borderCol: "border-emerald-100/60 dark:border-emerald-950/20"
    },
    {
      icon: <Laptop className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Mobile Learning",
      description: "Learn on the fly and stream 1080p lessons on any mobile device. Supports code reviews, workspace downloads, and responsive mock assessments.",
      accentLight: "from-purple-50 to-indigo-100",
      accentDark: "dark:from-purple-950/20 dark:to-indigo-900/10",
      borderCol: "border-purple-100/60 dark:border-purple-950/20"
    },
    {
      icon: <Code className="w-6 h-6 text-pink-650 dark:text-pink-400" />,
      title: "Live Projects",
      description: "Work on original projects modeled after actual industry scenarios. Build real sandboxes and present a working portfolio directly to recruiters.",
      accentLight: "from-pink-50 to-rose-100",
      accentDark: "dark:from-pink-950/20 dark:to-rose-900/10",
      borderCol: "border-pink-100/60 dark:border-pink-950/20"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: "Career Support",
      description: "Access our exclusive placement services, resume-building labs, private vacancy portals, and mock technical evaluation boards to get hired fast.",
      accentLight: "from-cyan-50 to-blue-100",
      accentDark: "dark:from-cyan-950/20 dark:to-blue-900/10",
      borderCol: "border-cyan-100/60 dark:border-cyan-950/20"
    }
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 font-sans relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed for Extreme High-Converting Outcomes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We strip away academic fluff. You learn through action, building concrete portfolios optimized for current industry hiring standards.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${feature.accentLight} ${feature.accentDark} border ${feature.borderCol} shadow-xs hover:shadow-lg dark:hover:border-slate-800 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                {/* Custom Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-heading font-extrabold text-slate-800 dark:text-white">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-stone-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>

              {/* Miniature decorative border badge */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-slate-550 dark:text-slate-400">
                <span>Gold Standard Metric</span>
                <span className="text-emerald-500">Included Free</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
