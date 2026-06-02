export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  instructorTitle: string;
  instructorImage: string;
  rating: number;
  ratingCount: number;
  studentCount: number;
  price: number;
  originalPrice: number;
  duration: string;
  lessons: number;
  image: string;
  badge?: string;
  skills: string[];
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // Dynamic icon rendering
  courseCount: number;
  bgGradient: string;
  iconBg: string;
  textCol: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
  image: string;
  courseCompleted: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  badge?: string;
  ctaText: string;
}

export interface Instructor {
  id: string;
  name: string;
  expertise: string;
  rating: number;
  studentsCount: number;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
