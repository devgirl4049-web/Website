import { useState } from "react";
import { MessageSquare, Send, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hello EduMaster Academy! I'm interested in enrolling in your courses. Could you please share more details?");

  const handleSend = () => {
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="whatsapp-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="mb-4 w-80 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                    alt="Education Advisor"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Aditi Sharma</h4>
                  <p className="text-xs text-blue-150">EduMaster Academy Advisor</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Close Whatsapp Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/40 h-48 overflow-y-auto space-y-3">
              <div className="bg-white dark:bg-slate-850 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-700 dark:text-slate-300">
                <p className="font-medium text-blue-600 dark:text-blue-400 mb-1">Hi there! 👋</p>
                <p>Welcome to EduMaster Academy. Ask me anything about our top courses, career placement, or special discount fees!</p>
              </div>
              <div className="bg-white dark:bg-slate-850 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-700 dark:text-slate-300">
                <p>💡 Get up to <span className="text-orange-500 font-bold">50% off</span> today on our best selling plans.</p>
              </div>
            </div>

            {/* Footer Form */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-16"
              ></textarea>
              <button
                onClick={handleSend}
                className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl cursor-pointer transition-all focus:outline-none group"
        aria-label="Contact via Whatsapp"
        id="whatsapp-trigger"
      >
        <Phone className="w-5 h-5 fill-current text-white animate-pulse" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Chat with Us
        </span>
        <span className="absolute top-0 right-0 w-3 h-3 bg-orange-500 border-2 border-white rounded-full animate-bounce"></span>
      </motion.button>
    </div>
  );
}
