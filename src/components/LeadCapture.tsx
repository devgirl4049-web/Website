import { useState, useTransition, FormEvent } from "react";
import { User, Mail, Phone, BookOpen, Send, X, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeadCaptureProps {
  onClose?: () => void;
  inlineMode?: boolean;
}

export default function LeadCapture({ onClose, inlineMode = false }: LeadCaptureProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedCourse: "AI & Vibe Coding",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isPending, startTransition] = useTransition();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const coursesList = [
    "AI & Vibe Coding",
    "Web Development",
    "Digital Marketing",
    "MS Office Mastery",
    "Graphic Design",
    "Data Analytics",
  ];

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    // Clear targeted error
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    let tempErrors = { name: "", email: "", phone: "" };
    let hasValidationError = false;

    if (!formData.name.trim()) {
      tempErrors.name = "Prospect name is required";
      hasValidationError = true;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please supply a valid email address";
      hasValidationError = true;
    }

    // Phone validation
    const cleanPh = formData.phone.replace(/[\s-]/g, "");
    if (!formData.phone.trim() || cleanPh.length < 10) {
      tempErrors.phone = "Provide a 10-digit number";
      hasValidationError = true;
    }

    if (hasValidationError) {
      setErrors(tempErrors);
      return;
    }

    // Wrap submission state transition inside standard useTransition to optimize render cycles
    startTransition(async () => {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Save prospectus request inside local database / state
      const existingLeads = JSON.parse(localStorage.getItem("academy_leads") || "[]");
      existingLeads.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("academy_leads", JSON.stringify(existingLeads));
      
      setIsSubmitSuccess(true);
    });
  };

  const mainFormContent = (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {/* Name Input */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1 dark:text-slate-400 uppercase tracking-wide">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"
            }`}
          />
        </div>
        {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1 dark:text-slate-400 uppercase tracking-wide">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"
            }`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email}</p>}
      </div>

      {/* Phone Number Input */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1 dark:text-slate-400 uppercase tracking-wide">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Phone className="w-4 h-4" />
          </div>
          <input
            type="tel"
            required
            placeholder="9876543210"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.phone ? "border-red-500" : "border-slate-200 dark:border-slate-800"
            }`}
          />
        </div>
        {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone}</p>}
      </div>

      {/* Program of Choice Selection */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1 dark:text-slate-400 uppercase tracking-wide">
          Desired Academy Program
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <select
            value={formData.selectedCourse}
            onChange={(e) => handleInputChange("selectedCourse", e.target.value)}
            className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
          >
            {coursesList.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 bg-gradient-to-r from-blue-700 via-blue-650 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center gap-2 "
        >
          {isPending ? (
            <span>Securing Spot, Please Wait...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Secure 50% Scholarship Access
            </>
          )}
        </button>
      </div>

      <p className="text-[10px] text-center text-slate-400 leading-normal">
        By submitting, you agree to receive a single one-time admission brochure and coupon prospectus via WhatsApp/Email. We respect your confidentiality.
      </p>
    </form>
  );

  const successMessage = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 text-center space-y-4"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mx-auto shadow-sm animate-bounce">
        <ShieldCheck className="w-8 h-8" />
      </div>
      <div>
        <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
          Application Submitted! 🎉
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
          Thank you, <span className="font-bold text-blue-600 dark:text-sky-450">{formData.name}</span>. Your 50% Scholarship Prospectus is locked.
        </p>
        <p className="text-xs text-slate-650 dark:text-slate-350 mt-1 leading-relaxed">
          An admissions counselor has reserved your spot and will reach out to you via <strong className="font-semibold text-slate-805 dark:text-white">{formData.email}</strong> or phone prospectus <strong className="font-semibold text-slate-805 dark:text-white">{formData.phone}</strong> shortly.
        </p>
      </div>

      <div className="pt-4 flex justify-center gap-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            // Fire Whatsapp widget instead for immediate advisor chat
            const el = document.getElementById("whatsapp-trigger");
            if (el) el.click();
            if (onClose) onClose();
          }}
          className="px-5 py-2 bg-green-500 hover:bg-green-650 text-white font-bold text-xs rounded-lg cursor-pointer transition-all"
        >
          Fast-Track via WhatsApp
        </a>

        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-200 dark:border-slate-850 rounded-lg text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 cursor-pointer"
          >
            Close Dialog
          </button>
        )}
      </div>
    </motion.div>
  );

  // If we are showing this inline as part of the bottom page
  if (inlineMode) {
    return (
      <section
        id="enrollment-registration"
        className="w-full max-w-lg mx-auto bg-white dark:bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-150/70 dark:border-slate-800 shadow-xl overflow-hidden font-sans"
      >
        <div className="text-center mb-6 space-y-1">
          <span className="text-[10px] font-extrabold text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded uppercase tracking-wide">
            LIMITED VACANCY SPOT
          </span>
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
            Register Academic Consultation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Submit credentials to instantly receive digital curriculum details and verified admission options.
          </p>
        </div>

        {isSubmitSuccess ? successMessage : mainFormContent}
      </section>
    );
  }

  // If we are showing this as a Popup Lead Modal
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm font-sans" id="lead-form-modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
      >
        
        {/* Close button top right */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1 bg-slate-100 hover:bg-slate-250 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full transition-all cursor-pointer focus:outline-none"
            aria-label="Close Prospectus Modal"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Banner header top */}
        {!isSubmitSuccess && (
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-orange-500 text-white p-6 pb-4">
            <h3 className="font-heading font-extrabold text-lg sm:text-xl flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
              Secure 50% Scholarship Spot
            </h3>
            <p className="text-[11px] text-blue-100 leading-normal mt-1">
              Join thousands of students learning skills of the future. Leave details to reserve your promotional discount.
            </p>
          </div>
        )}

        <div className="p-6">
          {isSubmitSuccess ? successMessage : mainFormContent}
        </div>

      </motion.div>
    </div>
  );
}
