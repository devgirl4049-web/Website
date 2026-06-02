import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenLeadForm: () => void;
}

export default function Navbar({ isDark, onToggleTheme, onOpenLeadForm }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Features", href: "#features" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Instructors", href: "#instructors" },
    { name: "FAQs", href: "#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-md"
          : "bg-transparent py-5 dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer"
            id="brand-logo"
          >
            <div className="bg-gradient-to-tr from-blue-600 to-orange-500 p-2 rounded-xl text-white group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-orange-400">
                EduMaster
              </span>
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest -mt-1 dark:text-slate-400">
                Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-sans">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-slate-650 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Icons & CTA Buttons */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-350 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Quick Enroll CTA */}
              <button
                type="button"
                onClick={onOpenLeadForm}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-slate-900 rounded-lg group bg-gradient-to-br from-blue-600 to-orange-500 group-hover:from-blue-600 group-hover:to-orange-500 hover:text-white dark:text-white focus:outline-none cursor-pointer"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500 group-hover:text-white" />
                    Apply Now
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick Mobile Theme Change */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-350 transition-colors"
              aria-label="Toggle mobile theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLeadForm();
                  }}
                  className="w-full bg-gradient-to-r from-blue-700 to-orange-500 hover:from-blue-800 hover:to-orange-650 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-center block cursor-pointer"
                >
                  Join Academy Today
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
