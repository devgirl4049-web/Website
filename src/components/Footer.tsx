import { GraduationCap, Mail, Phone, MapPin, Globe, Linkedin, Twitter, Github, Youtube, ArrowUp } from "lucide-react";

interface FooterProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleCoursesLink = (catName: string) => {
    onSelectCategory(catName);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
      
      {/* Top detailed content columns segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        
        {/* Column 1: Brand & vision */}
        <div className="space-y-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTop();
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="bg-gradient-to-tr from-blue-600 to-orange-500 p-2 rounded-xl text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
                EduMaster
              </span>
              <span className="block text-[8px] uppercase font-bold text-slate-500 tracking-widest -mt-0.5">
                Academy
              </span>
            </div>
          </a>

          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            EduMaster Academy is a premier comprehensive online learning platform offering hand-coded, project-centric technical video courses. We prepare students for industry roles by focusing on actual workflows over memorizing theoretical rules.
          </p>

          {/* Social Platforms Row */}
          <div className="flex items-center gap-2 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-450 transition-colors" aria-label="LinkedIn Account Link">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-sky-450 transition-colors" aria-label="Twitter Account Link">
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Github Account Link">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-rose-500 transition-colors" aria-label="Youtube Account Link">
              <Youtube className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Column 2: Direct Courses links */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-sm text-white tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500 pb-2">
            Academy Courses
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleCoursesLink("AI & Vibe Coding")} className="hover:text-amber-400 hover:underline transition-colors text-left cursor-pointer label">
                AI & Vibe Coding Track
              </button>
            </li>
            <li>
              <button onClick={() => handleCoursesLink("Web Development")} className="hover:text-amber-400 hover:underline transition-colors text-left cursor-pointer label">
                Full Stack Web Dev
              </button>
            </li>
            <li>
              <button onClick={() => handleCoursesLink("Data Analytics")} className="hover:text-amber-400 hover:underline transition-colors text-left cursor-pointer label">
                PowerBI & Science Analytics
              </button>
            </li>
            <li>
              <button onClick={() => handleCoursesLink("Digital Marketing")} className="hover:text-amber-400 hover:underline transition-colors text-left cursor-pointer label">
                Marketing & Growth Hacking
              </button>
            </li>
            <li>
              <button onClick={() => handleCoursesLink("Graphic Design")} className="hover:text-amber-400 hover:underline transition-colors text-left cursor-pointer label">
                UI/UX Figma Graphic Design
              </button>
            </li>
            <li>
              <button onClick={() => handleCoursesLink("MS Office Mastery")} className="hover:text-amber-400 hover:underline transition-colors text-left cursor-pointer label">
                Advanced MS Excel Secret Workflows
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="space-y-4 font-sans">
          <h4 className="font-heading font-extrabold text-sm text-white tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600 pb-2">
            Contact Support
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block font-bold text-slate-300">Admission Enquiries:</span>
                <a href="mailto:admissions@edumaster.academy" className="hover:text-orange-400 transition-colors">admissions@edumaster.academy</a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block font-bold text-slate-300">WhatsApp / Call Hotlines:</span>
                <span className="hover:text-blue-400 transition-colors">+91 98765 43210</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block font-bold text-slate-300">Academy Head Office:</span>
                <span className="block">4th Floor, High-Tech Core Labs, Outer Ring Road, Bengaluru, Karnataka - 560103</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Academic Prospectus Newsletter */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-sm text-white tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500 pb-2">
            Secure Prospectus
          </h4>
          <p className="text-xs text-slate-400 leading-normal">
            Subscribe below to get our instant PDF curriculum syllabus, verified guides, and scholarship discount notifications directly in your inbox.
          </p>

          {/* Quick inline email subscription sandbox */}
          <div className="pt-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscription Success! Watch out for curriculum newsletters inside your inbox folder.");
              }}
              className="flex items-center bg-slate-900 border border-slate-800 rounded-xl overflow-hidden p-1"
            >
              <input
                type="email"
                required
                placeholder="your.email@gmail.com"
                className="bg-transparent text-xs text-slate-200 placeholder-slate-500 px-3 focus:outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-3.5 rounded-lg transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Underline bottom segments: Legal, Copyright & scroll top */}
      <div className="bg-slate-975 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-[11px] text-slate-500">
            <span>© {currentYear} EduMaster Academy. All rights reserved.</span>
            <div className="hidden sm:inline w-px h-3.5 bg-slate-800"></div>
            <div className="flex items-center gap-3">
              <a href="#privacy-policy" onClick={(e) => e.preventDefault()} className="hover:text-slate-350 hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="#terms-conditions" onClick={(e) => e.preventDefault()} className="hover:text-slate-355 hover:underline">Terms & Conditions</a>
            </div>
          </div>

          {/* Core Scroll Back Up Anchor */}
          <div>
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white transition-all shadow-md cursor-pointer group flex items-center gap-1 text-[11px] font-bold"
              aria-label="Scroll back layout to top header"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
