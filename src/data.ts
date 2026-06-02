import { Course, Category, Testimonial, PricingPlan, Instructor, Faq } from "./types";

export const COURSES: Course[] = [
  {
    id: "course-1",
    title: "AI & Vibe Coding: Building Apps with Generative AI",
    category: "AI & Vibe Coding",
    instructor: "Dr. Aris Thorne",
    instructorTitle: "Ex-Google Staff Engineer & AI Researcher",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    ratingCount: 1840,
    studentCount: 5200,
    price: 999,
    originalPrice: 3999,
    duration: "12 Hours",
    lessons: 24,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    badge: "Trending",
    skills: ["Cursor & Bolt.new Mastery", "Prompt Engineering", "Full-Stack AI Integrations"]
  },
  {
    id: "course-2",
    title: "Full-Stack Web Development: Zero to Modern Deployment",
    category: "Web Development",
    instructor: "Sarah Jenkins",
    instructorTitle: "Senior Architect & Core React Contributor",
    instructorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    ratingCount: 2210,
    studentCount: 8400,
    price: 999,
    originalPrice: 4999,
    duration: "48 Hours",
    lessons: 92,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    badge: "Bestseller",
    skills: ["React 19 & Next.js", "Express & Node.js", "Tailwind CSS v4 & PostgreSQL"]
  },
  {
    id: "course-3",
    title: "Omnichannel Digital Marketing & Growth Hacking",
    category: "Digital Marketing",
    instructor: "Alex Rivera",
    instructorTitle: "Growth Lead @ Unicorn Startup",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    rating: 4.7,
    ratingCount: 940,
    studentCount: 3100,
    price: 499,
    originalPrice: 1999,
    duration: "18 Hours",
    lessons: 38,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    badge: "Hot Offer",
    skills: ["SEO Strategies", "Meta & Google Ads", "AI Copywriting & Funnels"]
  },
  {
    id: "course-4",
    title: "Office Suite Mastery: Excel, Word & PowerPoint Secret Workflows",
    category: "MS Office Mastery",
    instructor: "Michael Chang",
    instructorTitle: "Certified Microsoft Office Master Specialist",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    ratingCount: 1450,
    studentCount: 4200,
    price: 499,
    originalPrice: 2499,
    duration: "15 Hours",
    lessons: 45,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    skills: ["Advanced Excel & VBA", "Smart PowerPoint Pitchdecks", "AI Copilot Integration"]
  },
  {
    id: "course-5",
    title: "UI/UX & Brand Identity Graphic Design",
    category: "Graphic Design",
    instructor: "Elena Rostova",
    instructorTitle: "Creative Director & UX Guru",
    instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    ratingCount: 880,
    studentCount: 2900,
    price: 999,
    originalPrice: 3499,
    duration: "22 Hours",
    lessons: 50,
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
    badge: "New Release",
    skills: ["Figma Design Systems", "Typography & Color Theory", "High-Fidelity Prototyping"]
  },
  {
    id: "course-6",
    title: "Data Analytics & Insights: Zero to Dashboard Specialist",
    category: "Data Analytics",
    instructor: "Kabir Mehta",
    instructorTitle: "Lead Data Scientist",
    instructorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    ratingCount: 1120,
    studentCount: 3800,
    price: 1999,
    originalPrice: 5999,
    duration: "30 Hours",
    lessons: 64,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    badge: "Premium Job-ready",
    skills: ["Python & Pandas", "Interactive PowerBI & Tableau", "SQL Query Mastery"]
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "AI & Vibe Coding",
    iconName: "Sparkles",
    courseCount: 12,
    bgGradient: "from-amber-50 to-orange-100 dark:from-slate-850 dark:to-orange-950/20",
    iconBg: "bg-orange-500",
    textCol: "text-orange-600 dark:text-orange-400"
  },
  {
    id: "cat-2",
    name: "Web Development",
    iconName: "Code",
    courseCount: 18,
    bgGradient: "from-blue-50 to-sky-100 dark:from-slate-850 dark:to-sky-950/20",
    iconBg: "bg-blue-600",
    textCol: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "cat-3",
    name: "Digital Marketing",
    iconName: "Megaphone",
    courseCount: 8,
    bgGradient: "from-emerald-50 to-teal-100 dark:from-slate-850 dark:to-teal-950/20",
    iconBg: "bg-emerald-600",
    textCol: "text-emerald-600 dark:text-emerald-400"
  },
  {
    id: "cat-4",
    name: "MS Office Mastery",
    iconName: "BookOpenCheck",
    courseCount: 6,
    bgGradient: "from-purple-50 to-indigo-100 dark:from-slate-850 dark:to-indigo-950/20",
    iconBg: "bg-purple-600",
    textCol: "text-purple-600 dark:text-purple-400"
  },
  {
    id: "cat-5",
    name: "Graphic Design",
    iconName: "Laptop",
    courseCount: 11,
    bgGradient: "from-pink-50 to-rose-100 dark:from-slate-850 dark:to-rose-950/20",
    iconBg: "bg-pink-600",
    textCol: "text-pink-600 dark:text-pink-400"
  },
  {
    id: "cat-6",
    name: "Data Analytics",
    iconName: "Database",
    courseCount: 9,
    bgGradient: "from-cyan-50 to-blue-100 dark:from-slate-850 dark:to-blue-950/20",
    iconBg: "bg-cyan-600",
    textCol: "text-cyan-600 dark:text-cyan-400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Khanna",
    role: "Front-End Engineer",
    company: "TCS Interactive",
    rating: 5,
    feedback: "The AI & Vibe Coding course is mindblowing. I learned to assemble entire functional applications in a single weekend. It completely transformed how I think and code at work!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250",
    courseCompleted: "AI & Vibe Coding Mastery"
  },
  {
    id: "test-2",
    name: "Priyanka Sen",
    role: "Performance Marketer",
    company: "Myntra",
    rating: 5,
    feedback: "EduMaster Academy courses are incredibly hands-on. The instructors don't just lecture; they build real projects right alongside you. The career support helped me land my new job within three months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
    courseCompleted: "Omnichannel Digital Marketing"
  },
  {
    id: "test-3",
    name: "Aditya Hegde",
    role: "Junior Data Analyst",
    company: "Akaike Technologies",
    rating: 5,
    feedback: "The Data Analytics course went deep into SQL, Python, and Tableau dashboards. What actually got me my break was the capstone live project, which served as my primary portfolio during final interviews.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250",
    courseCompleted: "Data Analytics & Dashboards"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-basic",
    name: "Basic Plan",
    price: 499,
    period: "One-Time Payment",
    description: "Perfect for casual learners wanting to master core concepts on a budget.",
    features: [
      "Access to Single Course of Choice",
      "Interactive Learning Quizzes",
      "Verified digital Certificate",
      "Desktop & Mobile Access",
      "Standard Community Access"
    ],
    popular: false,
    ctaText: "Enroll Basic"
  },
  {
    id: "plan-pro",
    name: "Pro Plan",
    price: 999,
    period: "One-Time Payment",
    description: "Our most popular track. Lifetime access to multiple best-selling modern curriculums.",
    features: [
      "Access to 3 Core Tech Courses",
      "Comprehensive Live Projects",
      "Gold Certification of Completion",
      "Mobile Learning App Support",
      "Resume Review & Career Support",
      "Priority Instructor Chat Support",
      "Lifetime Upgrade Guarantee"
    ],
    popular: true,
    badge: "Best Value",
    ctaText: "Enroll Pro"
  },
  {
    id: "plan-premium",
    name: "Premium Plan",
    price: 1999,
    period: "One-Time Payment",
    description: "All-inclusive premium passport providing lifetime VIP access to entire catalogues & mentors.",
    features: [
      "Full Access to All 50+ Current & Future Courses",
      "Dedicated 1-on-1 Placement Mentorship",
      "Weekly Live Interactive Project Labs",
      "Unlimited Platinum Certificates",
      "Guaranteed Reference Interviews",
      "Direct Back-channel Community Access"
    ],
    popular: false,
    ctaText: "Go Premium"
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "inst-1",
    name: "Dr. Aris Thorne",
    expertise: "AI Researcher & Former Staff Engineer",
    rating: 4.9,
    studentsCount: 34000,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    id: "inst-2",
    name: "Sarah Jenkins",
    expertise: "React 19 Core Contributor & Consultant",
    rating: 4.8,
    studentsCount: 52000,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "inst-3",
    name: "Alex Rivera",
    expertise: "Growth Hacker & Omnichannel Expert",
    rating: 4.7,
    studentsCount: 19500,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

export const FAQS: Faq[] = [
  {
    id: "faq-1",
    question: "Do I get lifetime access to the courses?",
    answer: "Yes, absolutely! Unlike many other platforms, once you enroll in any plan, you get lifetime access to the courses included in that plan, along with all future updates to that course material.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How do the certificates of completion work?",
    answer: "Once you watch 100% of the lessons in a course and submit the final assessment/project, you will automatically generate a dynamic Gold/Silver certificate. You can instantly export this certificate to your LinkedIn profile with a verifiable credential ID.",
    category: "Certificate"
  },
  {
    id: "faq-3",
    question: "Is there real human support if I get stuck in a lesson?",
    answer: "Yes! Students in our Pro and Premium plans have access to our private active Community Discord and priority direct chat with instructors. You can drop screen shares, logs, and questions, and get feedback within hours.",
    category: "Support"
  },
  {
    id: "faq-4",
    question: "What is the Placement Assistance program exactly?",
    answer: "Our Premium Plan includes 1-on-1 portfolio review, mock interviews with actual tech leaders, resume optimization, and standard job reference sharing. We have solid placement tie-ups with leading Indian startups, service shops, and product brands.",
    category: "Careers"
  },
  {
    id: "faq-5",
    question: "Can I upgrade my plan later if I change my mind?",
    answer: "Definitely! You can easily upgrade from Basic to Pro or Premium at any time by simply paying the price difference in your student dashboard.",
    category: "Billing"
  }
];
