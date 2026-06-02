import { useState, useEffect } from "react";
import { Play, Users, BookOpen, Award, Clock, ArrowRight, ShieldCheck, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import heroImg from "../assets/images/hero_learning_1780378785558.png";

interface HeroProps {
  onOpenLeadForm: () => void;
}

export default function Hero({ onOpenLeadForm }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 44,
    seconds: 53,
  });

  // Urgency Countdown Timer Simulator
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 3 hours to loop for preview urgency simulation
          return { hours: 3, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format with leading zero
  const formatTime = (t: number) => t.toString().padStart(2, "0");

  const trustBadges = [
    { icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />, label: "10,000+ Students" },
    { icon: <BookOpen className="w-5 h-5 text-orange-500" />, label: "50+ Courses" },
    { icon: <Award className="w-5 h-5 text-emerald-500" />, label: "Lifetime Access" },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden font-sans"
    >
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none dark:bg-blue-600/5"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none dark:bg-orange-600/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Information Col - 7 Columns */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Promo Urgent Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-900/40 text-orange-650 dark:text-orange-400 text-xs font-semibold tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-orange-500 animate-spin" />
              <span>Limited-Time Offer: 50% Flat Scholarship Fee Discount!</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Learn Skills That <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-orange-400">
                Build Your Future
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium">
              Join thousands of students learning job-ready skills in AI development, vibe coding, analytics, and digital marketing from industry experts.
            </p>

            {/* Countdown Urgency Timer */}
            <div className="bg-white/90 dark:bg-slate-850/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg max-w-md mx-auto lg:mx-0 grid grid-cols-4 items-center gap-3">
              <div className="text-left col-span-2">
                <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                  Discount Offer Ends In
                </span>
                <span className="font-heading font-bold text-sm text-orange-500 dark:text-orange-400 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  Hurry up inside!
                </span>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2.5">
                <div className="text-center bg-slate-100 dark:bg-slate-950 p-1.5 rounded-lg w-12">
                  <span className="block font-mono text-base font-bold text-slate-800 dark:text-slate-100">
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Hr</span>
                </div>
                <span className="font-bold text-slate-400">:</span>
                <div className="text-center bg-slate-100 dark:bg-slate-950 p-1.5 rounded-lg w-12">
                  <span className="block font-mono text-base font-bold text-slate-800 dark:text-slate-100">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Min</span>
                </div>
                <span className="font-bold text-slate-400">:</span>
                <div className="text-center bg-slate-150 dark:bg-slate-950 p-1.5 rounded-lg w-12">
                  <span className="block font-mono text-base font-bold text-orange-600 dark:text-orange-400 animate-pulse">
                    {formatTime(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Sec</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenLeadForm}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm tracking-wide rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/20"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-55 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-850 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold text-sm text-center rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                  <Play className="w-3 h-3 text-blue-600 fill-current dark:text-blue-450" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Badges Bar */}
            <hr className="border-slate-200 dark:border-slate-800 max-w-lg mx-auto lg:mx-0" />
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                    {badge.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-750 dark:text-slate-350">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Illustration / Generated Image Column - 5 Columns */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Accents */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-orange-500 opacity-20 blur-xl pointer-events-none"></div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-[2rem] border border-slate-100 dark:border-slate-800/80 shadow-2xl overflow-hidden max-w-lg lg:max-w-none w-full"
            >
              <img
                src={heroImg}
                alt="EduMaster Academy online learning concept illustration"
                className="w-full h-auto rounded-[1.5rem] object-cover object-center bg-slate-50 dark:bg-slate-955 transition-transform duration-500 hover:scale-101"
                referrerPolicy="no-referrer"
              />

              {/* Float Widget 1: Placement Alert */}
              <div className="absolute top-8 left-8 glass-card rounded-2xl p-3 flex items-center gap-3 shadow-xl border border-white/50 animate-float">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center text-orange-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-[10px] text-orange-650 dark:text-orange-400">PLACEMENT GUARANTEE</span>
                  <p className="font-heading font-extrabold text-[11px] text-slate-800 dark:text-slate-200">100% Interview Support</p>
                </div>
              </div>

              {/* Float Widget 2: Live Badging */}
              <div className="absolute bottom-8 right-8 glass-card rounded-2xl p-3 flex items-center gap-2 shadow-lg border border-white/40 animate-float-delayed">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover object-top" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="font-bold text-[10px] text-blue-600 dark:text-sky-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 fill-current" />
                    Join 120+ is active online
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Watch Demo Simulated Video Overlay Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Toolbar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-850 flex items-center justify-between text-white">
                <h4 className="font-heading font-bold text-sm text-slate-300">EduMaster Academy Tour & Demo Sandbox</h4>
                <button
                  onClick={() => setShowVideo(false)}
                  className="p-1 px-2.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs font-bold cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {/* Video body (Vimeo/Youtube or styled illustration simulator for fast speed loading) */}
              <div className="aspect-video bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-slate-300 relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center brightness-30 opacity-70"></div>
                
                <div className="relative z-10 space-y-4 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto shadow-2xl border border-white/25 group-hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current text-white ml-1" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white">Tour our Course Dashboard</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Discover our high-tech learning dashboard featuring smart code sandboxes, live mentor chats, and real-time project trackers in action!
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setShowVideo(false);
                        onOpenLeadForm();
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold text-xs rounded-lg shadow-md cursor-pointer"
                    >
                      Enroll in Course to Start
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
