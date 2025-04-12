import { useState } from "react";
import profilePic from "./Assets/464cb0746bbaf2b962d7448bc987c8bb.jpg";
import screenshot1 from "./Assets/Screenshot 2025-04-12 120420.png";
import screenshot2 from "./Assets/Screenshot 2025-04-12 120822.png";
import screenshot3 from "./Assets/Screenshot 2025-03-01 200642.png";
import screenshot4 from "./Assets/Screenshot 2025-03-31 225106.png";
import screenshot5 from "./Assets/Screenshot 2025-04-06 184611.png";
import Persona3 from "./Assets/Persona 3 Reload Menu Wallpaper.mp4"
import Aragaki from "./Assets/Aragaki-blue.png"
import Mitsuru from "./Assets/Misturu.png"
import { MdArrowForwardIos } from "react-icons/md";
const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const heroData = {
  name: "Aditya Mandal",
  role: "FullStack Developer specializing in Frontend and building modern, responsive web applications with REACT, NODE, and TailwindCSS.",
  buttons: [
    { 
      label: "Get in Touch", 
      href: "#contact", 
      className: "p3-button-pulse bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-10 py-3 rounded-none font-medium transition-all duration-300 text-sm md:text-xl z-10 [clip-path:polygon(10%_0%,90%_0,80%_100%,0%_100%)] hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative" 
    },
    { 
      label: "View My Work", 
      href: "#projects", 
      className: "p3-button-pulse backdrop-blur-xl bg-blue-600/20  hover:border-blue-400 text-white px-10 py-3 rounded-none font-medium transition-all duration-300 text-sm md:text-xl z-10 [clip-path:polygon(10%_0%,90%_0,80%_100%,0%_100%)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100" 
    }
  ]
};

const aboutData = {
  title: "About Me",
  paragraphs: [
    "My journey in web development began with a curiosity about how websites work, which evolved into having a career focused on building engaging digital experiences.",
    "I enjoy the process of transforming ideas into reality using code. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a FromSoft game. yeah I'm a dark souls fan"
  ]
};

const skillsData = {
  title: "My Skills",
  items: [
    {
      name: "REACT.js, NEXT.js",
      description: "Building interactive UIs with it's component-based architecture,file based routing, state management and hooks"
    },
    {
      name: "TailwindCSS, Figma",
      description: "Creating responsive, utility-first designs with modern aesthetics. Have eye for attractive design."
    },
    {
      name: "NODE",
      description: "Developing backend services and APIs with Node.js to support frontend applications."
    },
    {
      name: "Database Management",
      description: "Have a good knowledge of MongoDB and MySQL. Mostly utilizing MongoDB for projects"
    },
  ]
};

const projectsData = {
  title: "MY PROJECTS",
  items: [
    {
      title: "HMS-dashbord",
      description: "Was tasked to build a Admin Hospital Management System Dashbord with the help of Cursor and my prefered tech stack",
      image: screenshot5,
      tags: ["React","NODE","Express","React-Icons","LIVE"],
      links: [
        { label: "View Project", url: "https://hms-dashbord-1.onrender.com/" },
        { label: "GitHub", url: "https://github.com/Johanlee69/HMS-Dashbord" }
      ]
    },
    {
      title: "Task Manager(Level UP)",
      description: "Task manager app with a level up theme.where users can add tasks, delete tasks, and mark tasks as completed and gain xp and level up",
      image: screenshot1,
      tags: ["React","NODE","Express","Api intigration","LIVE"],
      links: [
        { label: "View Project", url: "https://level-up-35in.onrender.com/" },
        { label: "GitHub", url: "https://github.com/Johanlee69/Level-UP--Local-version---JAuth-" }
      ]
    },
    {
      title: "A Password Manager",
      description: "A Password manager tool inspried by the game Dark Souls III. I havn't tested this project properly there might be some bugs",
      image: screenshot4,
      tags: ["React","Toastify","React-Icons","LIVE"],
      links: [
        { label: "View Project", url: "https://pass-souls-iii.onrender.com/" },
        { label: "GitHub", url: "https://github.com/Johanlee69/pass-souls-III" }
      ]
    },
    {
      title: "ChatGPT wrapper",
      description: "A clone of the ChatGPT web app, with MERN stack currently I have only the basic wrapper, working on the full stack",
      image: screenshot2,
      tags: ["React", "TailwindCSS", "RESTful", "MERN"],
      links: [
        { label: "GitHub", url: "https://github.com/Johanlee69/ChatGPT--Clone-wrapper" }
      ]
    },
    {
      title: "A Blog Social media website",
      description: "Tried to make a social media blog website where users can share their story",
      image: screenshot3,
      tags: ["React", "TailwindCSS", "API Integration", "MERN"],
      links: [
        { label: "GitHub", url: "https://github.com/Johanlee69/Blog-website" }
      ]
    }
  ]
};

const contactData = {
  title: "Get In Touch",
  message: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: "guddumandal605605@gmail.com"
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Smooth scroll function
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      setIsMenuOpen(false);
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 900;
      
      let startTime = null;
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollY = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollY);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      }
      requestAnimationFrame(animation);
    }
  };

  const smoothHorizontalScroll = (container, scrollAmount) => {
    if (!container) return;
    
    const startPosition = container.scrollLeft;
    const targetPosition = startPosition + scrollAmount;
    const distance = scrollAmount;
    const duration = 800; 
    
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollX = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      container.scrollLeft = scrollX;
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <nav className="sticky top-0 z-15 bg-black/40 backdrop-blur-sm border-b border-blue-800 ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <p className="text-xl font-bold text-blue-400">AM</p>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(link.id);
                }}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div 
          className={`md:hidden bg-slate-900 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-2">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(link.id);
                }}
                className="block py-2 hover:text-blue-400 transition cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="container mx-auto py-16 md:py-20 flex flex-col items-center justify-center text-center relative">
        <div className="mb-8">
          <img
            src={profilePic}
            alt={heroData.name}
            className="w-40 h-40 rounded-full object-cover cursor-pointer shadow-[0_2px_10px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
              transition-shadow duration-300 z-10 relative"
          />
        </div>
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">{heroData.name}</span>
        </h1>
        <p className="text-sm md:text-xl text-slate-300 max-w-2xl mb-8">
          {heroData.role}
        </p>
        <div className="flex">
          {heroData.buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              onClick={(e) => {
                e.preventDefault();
                const targetId = button.href.substring(1); 
                smoothScroll(targetId);
              }}
              className={button.className}
            >
              <p className="pr-2">
              {button.label}
              </p>
            </a>
          ))}
        </div>
        <video src={Persona3} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-40 
          [mask-image:radial-gradient(circle_at_center,black_20%,transparent_90%)] mask scale-x-[-1]"></video>
      </section>

      <section id="about" className="bg-slate-900/80 py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {aboutData.title.split(' ')[0]} <span className="text-blue-400">{aboutData.title.split(' ')[1]}</span>
          </h2>
          <div className="max-w-3xl mx-auto text-slate-300">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className={index < aboutData.paragraphs.length - 1 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-black/60 relative">
            <img src={Aragaki} alt="Aragaki" className="absolute top-10 md:top-0 md:left-[20%] left-[10%] w-[70%]  md:scale-x-[1] scale-x-[-1]  md:h-full object-cover opacity-50" />
            <img src={Mitsuru} alt="Mitsuru" className="absolute bottom-0 md:left-[5%] md:scale-x-[1] scale-x-[-1] md:h-full object-cover opacity-30 " />
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {skillsData.title.split(' ')[0]} <span className="text-blue-400">{skillsData.title.split(' ')[1]}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skillsData.items.map((skill, index) => (
              <div key={index} className="bg-slate-900/40 bg-blur p-4 border backdrop-blur-sm border-slate-800 hover:border-blue-400 transition scale-[90%] hover:scale-[100%] cursor-pointer ">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {skill.name}
                </h3>
                <p className="text-slate-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-900/90 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center flex justify-center gap-4">
           <MdArrowForwardIos className="text-blue-400 hidden bg-blue-900 size-10 p-2 rounded-full md:block scale-x-[-1] cursor-pointer scale-[-80%] hover:scale-[-100%] transition-all duration-300" onClick={() => {
              const scrollContainer = document.querySelector('.fixscroll');
              if (scrollContainer) {
                smoothHorizontalScroll(scrollContainer, -400); 
              }
            }}/>
            {projectsData.title.split(' ')[0]} <span className="text-blue-400">{projectsData.title.split(' ')[1]}</span>
            <MdArrowForwardIos className="text-blue-400 hidden bg-blue-900 size-10 p-2 rounded-full md:block cursor-pointer scale-[80%] hover:scale-[100%] transition-all duration-300" onClick={() => {
              const scrollContainer = document.querySelector('.fixscroll');
              if (scrollContainer) {
                smoothHorizontalScroll(scrollContainer, 400); 
              }
            }}/>
          </h2>
          <div className="fixscroll overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
            <div className="flex space-x-6 min-w-max px-2">
              {projectsData.items.map((project, index) => (
                <div key={index} className="bg-black/70 backdrop-blur-xl rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400 transition group w-80 md:w-96 flex-shrink-0">
                  <div className="h-48 bg-slate-800 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="text-blue-400 hover:text-blue-300 transition"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-black/60">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {contactData.title.split(' ')[0]} <span className="text-blue-400">{contactData.title.split(' ')[1]}</span>
          </h2>
          <div className="max-w-xl mx-auto bg-slate-900/80 p-8 rounded-lg border border-slate-800 text-center">
            <p className="text-slate-300 mb-6">
              {contactData.message}
            </p>
            <div className="flex justify-center items-center space-x-2 text-xl">
              <svg
                className="h-6 w-6 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href={`mailto:${contactData.email}`}
                className="text-blue-400 hover:underline text-sm md:text-2xl"
              >
                {contactData.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Aditya Mandal. ©ATLUS. ©SEGA All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
