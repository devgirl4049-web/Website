import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Instructors from "./components/Instructors";
import FAQ from "./components/FAQ";
import LeadCapture from "./components/LeadCapture";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Read from localStorage on mount
    const savedTheme = localStorage.getItem("academy_theme");
    return savedTheme === "dark";
  });

  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  // Sync dark mode configuration classes on HTML DOM node
  useEffect(() => {
    const rootElement = window.document.documentElement;
    if (isDark) {
      rootElement.classList.add("dark");
      localStorage.setItem("academy_theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("academy_theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased text-sm h-full`}>
      
      {/* Sticky Top Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenLeadForm={() => setIsLeadFormOpen(true)}
      />

      {/* Main Core Landing segments */}
      <main className="pt-4">
        
        {/* Hero Area */}
        <Hero onOpenLeadForm={() => setIsLeadFormOpen(true)} />

        {/* Categories Navigation Bridge */}
        <Categories onSelectCategory={setSelectedCategory} />

        {/* Features Modules */}
        <Features />

        {/* Course Grid Filters */}
        <Courses
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenLeadForm={() => setIsLeadFormOpen(true)}
        />

        {/* Why Choose Us Interactive Counters */}
        <WhyChooseUs />

        {/* Testimonials Deck */}
        <Testimonials />

        {/* Transparent Pricing Grid */}
        <Pricing onOpenLeadForm={() => setIsLeadFormOpen(true)} />

        {/* Authorized Faculty Instructors */}
        <Instructors />

        {/* Collapsible FAQ Accordions */}
        <FAQ />

        {/* Final Conversion CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
          {/* Backdrop pattern overlays */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center brightness-15 opacity-15 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Marketing Prose Column */}
              <div className="space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-300 font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  TRANSFORM YOUR CAREER
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight tracking-tight">
                  Start Learning Today & Secure Your Tomorrow
                </h2>
                
                <p className="text-blue-150 text-xs sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium text-slate-300">
                  Join thousands of proactive professional students upgrading their hard skill portfolios at EduMaster Academy. Reserve your limited-time slot.
                </p>

                {/* Trust mini checklists */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs font-bold pt-2 text-slate-350">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                    Gold Certifications Included
                  </span>
                  <span className="hidden sm:inline text-white/25">•</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                    RBI-Approved Safe UPI Sandbox
                  </span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => setIsLeadFormOpen(true)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Join Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#faq"
                    className="text-xs font-bold text-blue-200 hover:text-white transition-colors"
                  >
                    View Enrollment Guidelines ➔
                  </a>
                </div>
              </div>

              {/* Conversion Prospectus Form Integration Column */}
              <div className="relative flex justify-center">
                <LeadCapture inlineMode={true} />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Structured Footer */}
      <Footer onSelectCategory={setSelectedCategory} />

      {/* WhatsApp Floating Chat Service Widget */}
      <WhatsAppChat />

      {/* Lead capture Dialog Popup with Smooth Animation */}
      <AnimatePresence>
        {isLeadFormOpen && (
          <LeadCapture
            onClose={() => setIsLeadFormOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
