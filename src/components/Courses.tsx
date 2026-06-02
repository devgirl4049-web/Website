import { useState, useTransition } from "react";
import { Star, Users, Clock, BookOpen, Sparkles, Check, CheckCircle } from "lucide-react";
import { COURSES } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface CoursesProps {
  onOpenLeadForm: () => void;
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export default function Courses({ onOpenLeadForm, selectedCategory, onSelectCategory }: CoursesProps) {
  const [, startTransition] = useTransition();

  const categories = [
    "All Courses",
    "AI & Vibe Coding",
    "Web Development",
    "Digital Marketing",
    "MS Office Mastery",
    "Graphic Design",
    "Data Analytics"
  ];

  const handleCategoryTabClick = (category: string) => {
    startTransition(() => {
      onSelectCategory(category);
    });
  };

  const filteredCourses = selectedCategory === "All Courses"
    ? COURSES
    : COURSES.filter(course => course.category === selectedCategory);

  return (
    <section
      id="courses"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
              POPULAR COURSES
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-3">
              Learn Skills That High-Performance Companies Want
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Invest in your career with zero-fluff, project-based video tracks led by verified industry practitioners.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/20 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
              %
            </div>
            <div>
              <p className="font-heading font-extrabold text-xs text-orange-650 dark:text-orange-400 leading-none">LAUNCH SCHOLARSHIP</p>
              <p className="text-[11px] font-bold text-slate-650 dark:text-slate-350 mt-1">Get up to 80% discount on enrollments!</p>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 mb-8 border-b border-slate-100 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryTabClick(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap cursor-pointer transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-102"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card Grid Container with Layout Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const discountPercent = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 105) - 25; // Adjusted offset for premium look
              return (
                <motion.article
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-150/70 dark:border-slate-800/80 shadow-xs hover:shadow-xl dark:hover:border-slate-800 overflow-hidden flex flex-col justify-between group h-full"
                >
                  
                  {/* Thumbnail & Badges */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {course.badge && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
                        <Sparkles className="w-3.5 h-3.5" />
                        {course.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white font-bold text-[10px] tracking-wide px-2 rounded-md py-1">
                      {course.duration}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-extrabold uppercase text-orange-500 dark:text-orange-400">
                        {course.category}
                      </span>
                      
                      <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white leading-snug tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        {course.title}
                      </h3>

                      {/* Instructor block */}
                      <div className="flex items-center gap-2 pt-1 pb-2">
                        <img
                          src={course.instructorImage}
                          alt={course.instructor}
                          className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{course.instructor}</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">Instructor</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Metadata stars/students progress */}
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="font-bold text-slate-800 dark:text-slate-100">{course.rating}</span>
                        <span className="text-[10px] text-slate-400">({course.ratingCount})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-450 text-[11px]">
                        <Users className="w-3.5 h-3.5" />
                        <span>{course.studentCount.toLocaleString()}+ students</span>
                      </div>
                    </div>

                    {/* Course Skills checklist */}
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-bold text-slate-400">Key Skills you learn:</p>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        {course.skills.map((skill, index) => (
                          <li key={index} className="flex items-center gap-1 truncate">
                            <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-sky-450 rounded-full flex-shrink-0"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider line */}
                    <hr className="border-slate-100 dark:border-slate-800" />

                    {/* Pricing Grid & Action Row */}
                    <div className="flex items-center justify-between">
                      <div>
                        {/* Price Display */}
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
                            ₹{course.price}
                          </span>
                          <span className="text-xs text-slate-400 line-through">
                            ₹{course.originalPrice}
                          </span>
                        </div>
                        <span className="text-[9px] uppercase font-extrabold tracking-wide text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 p-0.5 px-1.5 rounded-md">
                          Save {discountPercent}% Off
                        </span>
                      </div>

                      {/* Enroll Call Trigger */}
                      <button
                        onClick={onOpenLeadForm}
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-extrabold text-xs tracking-wide rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer hover:shadow-md border-t border-white/10"
                      >
                        Enroll Now
                        <Clock className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
