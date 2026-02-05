import geometriImg from "./images/Annotation 2023-09-22 140326.png";
import AiUniverseImg from "./images/Annotation 2023-09-22 145802.png";
import WriteOnImg from "./images/Annotation 2023-09-22 150228.png";
import JobLioImg from "./images/Annotation 2023-09-22 153408.png";
import shaporiItalianoImg from "./images/recipe-app.png";
import sportifyImg from "./images/sportify-camp(2).png";
import toyCastleImg from "./images/toy-castle.png";

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
    id: 1,
    title: "Sapori Italiano",
    img: shaporiItalianoImg,
    end: "MERN STACK",
    details:
      "This single-page application implements dynamic routing and Firebase authentication.The Chef Details page is protected,accessible only to logged-in users.Image performance optimization is achieved using react-lazy-load. Express.js is utilized for backend functionality, and dummy JSON data is obtained from the backend.",
    tech: [
      "React Js",
      "Tailwind css",
      "DaisyUi",
      "React Router Dom",
      "Express js",
      "MongoDB",
      "Firebase",
      "React-Lazy-Image",
    ],
    liveLink: "https://repice-app-6cac9.web.app/",
    githubLinkClient: "https://github.com/Sayemhaque/chef-website",
    githubLinkServer: "https://github.com/Sayemhaque/chef-website-backend",
  },
  {
    id: 2,
    title: "TOY Castle",
    img: toyCastleImg,
    stack: "MERN STACK",
    details:
      "Toy Castle is a MERN full-stack web app with Firebase authentication. Users can register to access all features, including adding toys, updating/deleting their toys, and searching toys by name on the All Toys page.",
    tech: [
      "React Js",
      "Tailwind css",
      "DaisyUi",
      "React Router Dom",
      "Express js",
      "MongoDB",
      "Firebase",
      "React Tabs",
      "react-toastify",
    ],
    liveLink: "https://toy-castle-409e5.web.app/",
    githubLinkClient: "https://github.com/Sayemhaque/toy-castle-client",
    githubLinkServer: "https://github.com/Sayemhaque/toy-castle-server",
  },
  {
    id: 3,
    title: "Sportify Camp",
    img: sportifyImg,
    stack: "MERN STACK",
    details:
      "Sportify is a feature-rich web app for sports enthusiasts. It offers JWT authorization, role-based routing, admin/instructor panels, Firebase authentication, and Stripe payment integration. Users can connect, explore sports classes, and make secure online payments.",
    tech: [
      "React Js",
      "Tailwind css",
      "DaisyUi",
      "Axios",
      "React Router Dom",
      "Express js",
      "MongoDB",
      "JWT",
      "Firebase",
      "React Tabs",
      "react-toastify",
      "Stripe",
      "react-hook-form",
      "react-responsive-carousel",
      "react-simple-typewriter",
      "sweetalert2",
    ],
    liveLink: "https://sportify-app-35c1c.web.app/",
    githubLinkClient: "https://github.com/Sayemhaque/sportify-camp",
    githubLinkServer: "https://github.com/Sayemhaque/sportify-camp-backend",
  },
  {
    id: 4,
    title: "Geometri Genious",
    img: geometriImg,
    stack: "Javascript",
    details: "Different area calculation using javascirpt DOM manupulation",
    tech: ["HTML", "CSS", "Javascript", "DOM"],
    liveLink: "https://geometri-genious.netlify.app/",
    githubLinkClient: "https://geometri-genious.netlify.app/",
    githubLinkServer: "https://geometri-genious.netlify.app/",
  },
  {
    id: 5,
    title: "Ai Universe",
    img: AiUniverseImg,
    stack: "Javascript",
    details: "Dynamic Javascript website using Api",
    tech: ["HTML", "CSS", "Javascript", "Api"],
    liveLink: "https://ai-universe-hubb.netlify.app/",
    githubLinkClient: "https://ai-universe-hubb.netlify.app/",
    githubLinkServer: "https://ai-universe-hubb.netlify.app/",
  },
  {
    id: 6,
    title: "Write On",
    img: WriteOnImg,
    stack: "ReactJs",
    details: "User can add blog to bookmark and aslo can read time.",
    tech: ["HTML", "CSS", "ReactJs", "Api", "Hooks"],
    liveLink: "https://write-onn.netlify.app/",
    githubLinkClient: "https://write-onn.netlify.app/",
    githubLinkServer: "https://write-onn.netlify.app/",
  },
  {
    id: 7,
    title: "Job Lio",
    img: JobLioImg,
    stack: "ReactJs",
    details: "Apply jobs and jobs will store in Local Storeage.",
    tech: ["HTML", "CSS", "ReactJs", "Api", "Hooks", "Local Storage"],
    liveLink: "https://write-onn.netlify.app/",
    githubLinkClient: "https://write-onn.netlify.app/",
    githubLinkServer: "https://write-onn.netlify.app/",
  },
];
