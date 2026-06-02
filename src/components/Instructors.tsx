import { Star, Users, ArrowUpRight, Linkedin, Twitter, Github } from "lucide-react";
import { INSTRUCTORS } from "../data";
import { motion } from "motion/react";

export default function Instructors() {
  return (
    <section
      id="instructors"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            FACULTY LEADERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn from Trusted Technical Pioneers
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-xs sm:text-sm">
            Our instructors do not write generic blog posts. They are actual veteran tech product leaders, authors, and industry coordinators who build actual systems daily.
          </p>
        </div>

        {/* Instructors Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <motion.div
              key={instructor.id}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Panel */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-950 relative border border-slate-100 dark:border-slate-850 group">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top filter grayscale-10 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Info labels */}
                <div>
                  <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-lg">
                    {instructor.name}
                  </h3>
                  <p className="text-xs font-bold text-blue-600 dark:text-sky-450 mt-1 h-8 overflow-hidden">
                    {instructor.expertise}
                  </p>
                </div>

                {/* Academic Metrics stars/students */}
                <div className="grid grid-cols-2 gap-3 bg-white dark:bg-slate-850 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
                  <div className="text-center border-r border-slate-100 dark:border-slate-850">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">AVG RATINGS</span>
                    <span className="font-heading font-extrabold text-slate-850 dark:text-slate-100 flex items-center justify-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      {instructor.rating}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">TOTAL LEARNERS</span>
                    <span className="font-heading font-extrabold text-slate-850 dark:text-slate-100 mt-1 block">
                      {instructor.studentsCount.toLocaleString()}+
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Call-Action Row */}
              <div className="mt-6 pt-4 border-t border-slate-150/70 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">Academic Social links:</span>
                <div className="flex gap-2.5">
                  {instructor.socials.linkedin && (
                    <a
                      href={instructor.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-450 hover:text-blue-600 transition-colors"
                      aria-label={`${instructor.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                    </a>
                  )}

                  {instructor.socials.twitter && (
                    <a
                      href={instructor.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-455 hover:text-sky-500 transition-colors"
                      aria-label={`${instructor.name} Twitter Profile`}
                    >
                      <Twitter className="w-4 h-4 fill-current" />
                    </a>
                  )}

                  {instructor.socials.github && (
                    <a
                      href={instructor.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-455 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label={`${instructor.name} Github Profile`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
