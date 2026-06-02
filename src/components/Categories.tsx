import { Sparkles, Code, Megaphone, BookOpenCheck, Laptop, Database, ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "../data";
import { motion } from "motion/react";

interface CategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  // Map hardcoded string icons to actual physical lucide renders
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Code":
        return <Code className="w-5 h-5" />;
      case "Megaphone":
        return <Megaphone className="w-5 h-5" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-5 h-5" />;
      case "Laptop":
        return <Laptop className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    // Smooth scroll to courses section
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-3 py-1 rounded-full">
              LEARNING PATHWAYS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-3">
              Explore Our Hot Course Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Select an academy track to filter best selling courses and launch your target portfolio.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleCategoryClick(category.name)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                {/* Dynamically Styled Icon Bag */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${category.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-slate-800 dark:text-slate-100 text-base">
                    {category.name}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {category.courseCount}+ Programs Listed
                  </span>
                </div>
              </div>

              {/* Action Circle */}
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 group-hover:bg-blue-600 group-hover:text-white text-slate-400 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
