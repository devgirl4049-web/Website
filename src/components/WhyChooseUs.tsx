import { useState, useEffect } from "react";
import { Smile, GraduationCap, Trophy, HelpCircle, Briefcase, CheckSquare, ShieldCheck, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const [satisfaction, setSatisfaction] = useState(0);
  const [graduates, setGraduates] = useState(0);
  const [successStories, setSuccessStories] = useState(0);

  // Statistics increment counter simulation
  useEffect(() => {
    const duration = 2000; // ms
    const limitSatisfaction = 95;
    const limitGraduates = 10000;
    const limitStories = 500;

    const intervalSatisfaction = Math.floor(duration / limitSatisfaction);
    const intervalStories = Math.floor(duration / limitStories);

    const satTimer = setInterval(() => {
      setSatisfaction((prev) => {
        if (prev < limitSatisfaction) return prev + 1;
        clearInterval(satTimer);
        return limitSatisfaction;
      });
    }, intervalSatisfaction);

    const storyTimer = setInterval(() => {
      setSuccessStories((prev) => {
        if (prev < limitStories) return prev + 5;
        clearInterval(storyTimer);
        return limitStories;
      });
    }, intervalStories * 5);

    // Speed up graduates count
    const gradTimer = setInterval(() => {
      setGraduates((prev) => {
        if (prev < limitGraduates) return prev + 100;
        clearInterval(gradTimer);
        return limitGraduates;
      });
    }, 20);

    return () => {
      clearInterval(satTimer);
      clearInterval(gradTimer);
      clearInterval(storyTimer);
    };
  }, []);

  const statsList = [
    {
      id: "stat-1",
      icon: <Smile className="w-8 h-8 text-orange-500" />,
      number: `${satisfaction}%`,
      label: "Student Satisfaction",
      subtext: "Tracked via independent terminal surveys and feedback."
    },
    {
      id: "stat-2",
      icon: <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      number: `${graduates.toLocaleString()}+`,
      label: "Graduates Worldwide",
      subtext: "Now working in corporate tech, marketing, and analytical domains."
    },
    {
      id: "stat-3",
      icon: <Trophy className="w-8 h-8 text-emerald-500" />,
      number: `${successStories}+`,
      label: "Success Stories",
      subtext: "Verified user testimonies, resume reviews, and promotion posts."
    },
    {
      id: "stat-4",
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      number: "Guaranteed",
      label: "Placement Assistance",
      subtext: "Corporate referrals, resume polishing, and portfolio drills."
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 sm:py-24 bg-slate-900 text-white font-sans relative overflow-hidden"
    >
      {/* Visual background textures */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center brightness-15 opacity-10"></div>
      
      {/* Glowing backdrop lamps */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
            WHY TRUST US?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
            Designed for Career Transitions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            EduMaster Academy is not of generic tutoring blogs. We measure our success solely by user transitions and live working apps.
          </p>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between"
              id={stat.id}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-orange-400 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-100 mt-1">
                    {stat.label}
                  </h3>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* High Converting Corporate Placement Accolades Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 border border-blue-500/20 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-orange-505/20 text-orange-300 font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md">
              <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              HOT PLACEMENT HUB
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl">
              Partnering with TOP Leading Indian Innovations
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              We coordinate placement referrals and technical evaluations with high growth organizations. Launch specialized portfolios and receive dynamic job support today.
            </p>
          </div>

          {/* Core Partner Icons Placeholder Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-slate-950/30 p-4 rounded-2xl border border-white/5">
            <div className="text-center">
              <span className="block text-[10px] font-bold text-blue-400 tracking-wider">MICROSOFT</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">Specialist Core</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-[10px] font-bold text-orange-400 tracking-wider">FLUTTER & WEB</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">Framework standards</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-[10px] font-bold text-emerald-400 tracking-wider">FIGMA</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">System UI Labs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
