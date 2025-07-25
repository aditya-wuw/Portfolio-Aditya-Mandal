import { assets } from "./src/Assets/assets";

export const navLinks = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroData = {
  name: "Aditya Mandal",
  role: "Full-Stack Developer aka @NulledFacedDev, focused on modern, responsive web apps using React, Next, and TailwindCSS",
  buttons: [
    {
      label: "Get in Touch",
      href: "#contact",
      className:
        "p3-button-pulse bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-10 py-3 rounded-none font-medium transition-all duration-300 text-sm md:text-xl z-10 [clip-path:polygon(12%_0%,95%_0,80%_100%,0%_100%)] hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative",
    },
    {
      label: "View My Work",
      href: "#projects",
      className:
        "p3-button-pulse backdrop-blur-xl bg-blue-600/20  hover:border-blue-400 text-white px-10 py-3 rounded-none font-medium transition-all duration-300 text-sm md:text-xl z-10 [clip-path:polygon(10%_0%,90%_0,80%_100%,0%_100%)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100",
    },
  ],
};

export const skillsData = {
  title: "Skills",
  items: [
    {
      name: "Next.js",
      description:
        "Skilled in creating full-stack web applications using Next.js, leveraging file-based routing, SSR, and API routes.",
    },
    {
      name: "React.js",
      description:
        "Expert in building interactive, component-based UIs using React. Proficient with hooks, context API, and state management.",
    }, 
    {
      name: "TypeScript",
      description:
        "Decent understanding of TypeScript. Comfortable using it to add type safety to React and Node.js projects.",
    },
    {
      name: "Tailwind CSS",
      description:
        "Expert in crafting responsive and utility-first designs with modern aesthetics using Tailwind CSS.",
    },
    {
      name: "Supabase",
      description:
        "Expert with using Supabase for database, storage buckt or Authentications",
    },
    {
      name: "Node.js",
      description:
        "Proficient in building scalable backend services, RESTful APIs, and integrating databases using Node.js and Express.",
    },
    {
      name: "PostgreSQL",
      description:
        "Skilled in using PostgreSQL for relational database design, querying, and integration with backend services.",
    },
    {
      name: "MongoDB",
      description:
        "Experienced in handling NoSQL databases like MongoDB for flexible, document-oriented data storage.",
    }
  ],
};

export const projectsData = {
  title: "Projects",
  items: [
    {
      title: "Mogger AI",
      description:
        "AI-powered web app that generates personalized mock tests to help students prepare effectively for exams.",
      image: assets.screenshot2,
      tags: ["NEXT", "TailwindCSS", "RESTful", "Supabase"],
      links: [
        { label: "View Project", url: "https://mogger-mog-your-exams.vercel.app/" },
        {
          label: "GitHub",
          url: "https://github.com/aditya-wuw/ChatGPT--Clone-wrapper",
        },
      ],
    },
     {
      title: "FireShip Discord bot",
      description:
        "FireShip bot is a Discord bot designed to keep users up to date with the latest videos from the FireShip YouTube channel",
      image: assets.Fireship,
      tags: ["NODE", "EXPRESS", "YTV3", "Api creation"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/aditya-wuw/FireShipBot",
        },
      ],
    },
    {
      title: "HMS-dashbord",
      description:
        "Was tasked to build a Admin Hospital Management System Dashbord, no auth you can directly check the live demo",
      image: assets.screenshot5,
      tags: ["React", "NODE", "Express", "React-Icons", "LIVE"],
      links: [
        { label: "View Project", url: "https://hms-dashbord-1.onrender.com/" },
        { label: "GitHub", url: "https://github.com/aditya-wuw/HMS-Dashbord" },
      ],
    },
    {
      title: "Task Manager(Level UP)",
      description:
        "Task manager app with a level up theme.where users can add tasks, delete tasks, and mark tasks as completed and gain xp and level up",
      image: assets.screenshot1,
      tags: ["React", "NODE", "Express", "Api intigration", "LIVE"],
      links: [
        { label: "View Project", url: "https://level-up-35in.onrender.com/" },
        {
          label: "GitHub",
          url: "https://github.com/aditya-wuw/Level-UP--Local-version---JAuth-",
        },
      ],
    }
  ],
};

export const contactData = {
  title: "Contact Info",
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: "nullfaceddevbusiness@gmail.com",
};

