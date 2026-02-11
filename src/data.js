// Vasha Academy Image
import vashaImg from "./images/vasha-academy/vasha.png";

// Academy Suite Admin Images
import companySettingsAdmin from "./images/admin-app/company-settings-admin.png";
import dashboardAdmin from "./images/admin-app/dashboard-admin.png";
import usersAdmin from "./images/admin-app/users-admin.png";

// Tarsheed Academy Images
import tarsheedCourses from "./images/tarshee-academy/courses.png";
import tarsheedEnrolled from "./images/tarshee-academy/enrolled-dashboard.png";
import tarsheedPayment from "./images/tarshee-academy/payment-papge.png";
import tarsheedHero from "./images/tarshee-academy/tarsheed-hero.png";

export const frontedSkills = [
  { id: 1, name: "Html5" },
  { id: 2, name: "css3" },
  { id: 3, name: "javascript" },
  { id: 4, name: "React js" },
  { id: 5, name: "React Query" },
  { id: 6, name: "Bootstrap" },
  { id: 7, name: "Tailwind css" },
  { id: 8, name: "Next js" },
  { id: 9, name: "React Native" },
];

export const backednSkills = [
  { id: 1, name: "Node js (Basic)" },
  { id: 2, name: "Express js" },
  { id: 3, name: "Mongodb" },
  { id: 4, name: "Nest js" },
  { id: 5, name: "MySQL" },
  { id: 6, name: "PostgreSQL" },
];

export const aiSkills = [
  { id: 1, name: "Claude" },
  { id: 2, name: "Gemini" },
  { id: 3, name: "Cursor" },
  { id: 4, name: "Antigravity" },
];

export const exploring = [
  { id: 1, name: "Docker" },
  { id: 2, name: "AWS" },
  { id: 3, name: "System Design" },
];

// Keeping tools just in case, though not in user's new list
export const tools = [
  { id: 2, name: "Git" },
  { id: 1, name: "Visual studio code" },
  { id: 3, name: "Github" },
  { id: 4, name: "Firebase" },
  { id: 5, name: "Netlify" },
  { id: 6, name: "Vercel" },
];

export const projects = [
  {
    id: 101,
    title: "Academy Suite Admin",
    images: [dashboardAdmin, usersAdmin, companySettingsAdmin],
    stack: "React / Vite (Admin)",
    details:
      "The comprehensive Admin Dashboard for the multi-tenant Academy Suite SaaS. It manages the platform's extensive capabilities: \n" +
      "• Live Class Integration: Google Meet and Zoom support.\n" +
      "• Payments: SSLCommerz & Stripe integration with dynamic currency support.\n" +
      "• Analytics: PostHog, Meta Pixel, and Google Analytics integration.\n" +
      "• Customization: Dynamic user app page content management.\n" +
      "• Video Hosting: Integrated with Gotipath.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Gotipath",
      "Stripe",
      "SSLCommerz",
      "MySQL",
      "Drizzle ORM",
    ],
    liveLink: "#",
    githubLinkClient: null,
    githubLinkServer: null,
  },
  {
    id: 102,
    title: "Vasha Academy",
    images: [vashaImg],
    stack: "Next.js",
    details:
      "A dedicated tenant on the Academy Suite platform focused on language learning. Features a custom premium design with a focus on student engagement, live class integration, and interactive quizzes.",
    tech: ["Next.js 14", "React", "Tailwind CSS", "Gotipath", "TypeScript"],
    liveLink: "https://vasha.ac/en",
    githubLinkClient: null,
    githubLinkServer: null,
  },
  {
    id: 103,
    title: "Tarsheed Academy",
    images: [tarsheedHero, tarsheedCourses, tarsheedEnrolled, tarsheedPayment],
    stack: "Next.js 16",
    details:
      "An educational platform built on the newest stack (Next.js 16). Features a streamlined admin interface, BunnyCDN integration for high-performance video delivery, and authorized exam management. Focuses on Islamic education and guidance.",
    tech: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "BunnyCDN",
      "Vite (Admin)",
      "PostgreSQL",
    ],
    liveLink: "https://tarsheedacademy.com/bn",
    githubLinkClient: null,
    githubLinkServer: null,
  },
];
