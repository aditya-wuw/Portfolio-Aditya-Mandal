import { useState, useEffect } from "react";
import profilePic from "./Assets/logo.png";
import Persona3 from "./Assets/Persona 3 Reload Menu Wallpaper.mp4";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import P3buttons from "./Components/P-3button";
import P3TittleScreenText from "./Components/P3-TittleScreenText";
import { FaClock } from "react-icons/fa";
import { navLinks,heroData,skillsData,projectsData,contactData } from "../data";
import {easeInOut, motion} from 'motion/react'

const lastUpdate = "25th July 2025"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setIsMenuOpen(false);
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 900;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollY = easeInOutCubic(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, scrollY);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }
      requestAnimationFrame(animation);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <nav className="sticky lg:mx-50 md:mx-20 mx-2 top-5 z-15 rounded-xl bg-blue-300/10 lg:backdrop-blur-[15px] backdrop-blur-[5px]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <p className="text-xl font-bold text-blue-800">AM</p>
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
            {navLinks.map((link) => (
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
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-2">
            {navLinks.map((link) => (
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
        <div className="mb-8 relative lg:top-2 top-5">
          <img
            src={profilePic}
            alt={heroData.name}
            className="w-40 h-40 rounded-full object-cover cursor-pointer shadow-[0_2px_10px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.8)]
              transition-shadow duration-300 z-10 relative md:mb-10 "
          />
        </div>
        <h1 className="md:text-6xl text-5xl font-bold mb-6 relative text-start">
          <p className="relative z-11 md:right-25 text-blue-100">Hi, I'm</p>
          <span className="relative md:absolute md:top-[-68%] left-3 md:left-25 z-10 max-w-[50vw]">
            <P3TittleScreenText lable={heroData.name} />
          </span>
        </h1>
        <p className="text-sm mx-5 md:text-xl text-slate-300 max-w-2xl mb-8">
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
              className={!isDesktop ? button.className : "relative z-10"}
            >
              {isDesktop ? (
                <P3buttons lable={button.label} />
              ) : (
                <p className="pr-2">{button.label}</p>
              )}
            </a>
          ))}
        </div>
        <video
          src={Persona3}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40 
          [mask-image:radial-gradient(circle_at_center,black_20%,transparent_90%)] mask scale-x-[-1]"
        ></video>
      </section>
      <div className="grid-bg bg-black/70 relative">
        <section id="skills" className="py-5  relative ">
          <div className="container mx-auto px-4 relative">
            <div className="m-5">
              <h2 className="text-center font-bold p-1 text-2xl text-blue-400/80 hover:cursor-default">
                {skillsData.title}
              </h2>
              <h1 className="text-center p-1 text-gray-400">
                Full-stack developer skilled in modern web tech, APIs,
                databases, and UI design
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-4xl mx-auto">
              {skillsData.items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/50 hover:animate-none bg-blur p-4 border border-slate-800 hover:border-blue-400 transition scale-[90%] hover:scale-[100%] cursor-pointer "
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5+index,ease:"easeInOutCubic"}}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    {skill.name}
                  </h3>
                  <p className="text-slate-300">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <motion.div className="container mx-auto px-4 relative hover:cursor-default"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,ease:"circInOut"}}
          >
            <div className="m-5 relative z-10">
              <h2 className="text-center font-bold p-1 text-2xl text-blue-400/80 hover:cursor-default">
                {projectsData.title}
              </h2>
              <h1 className="text-center p-1 text-gray-400">
                A collection of my work spanning from Front-end to full-stack
                projects{" "}
              </h1>
            </div>
            <div className="fixscroll overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
              <div className="flex space-x-6 min-w-max px-2 justify-center">
                {projectsData.items.map((project, index) => (
                  <div
                    key={index}
                    className="bg-black/30 hover:bg-black/70 transition-bg rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400  group w-80 md:w-70 flex-shrink-0"
                  >
                    <div className="h-30 bg-slate-800 overflow-hidden">
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
                      <p className="text-slate-300 mb-2 text-sm py-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded"
                          >
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
          </motion.div>
        </section>
      </div>
      <section id="contact" className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {contactData.title.split(" ")[0]}{" "}
            <span className="text-blue-400">
              {contactData.title.split(" ")[1]}
            </span>
          </h2>
          <div className="max-w-xl mx-auto bg-slate-900/80 p-8 rounded-lg border border-slate-800 text-center">
            <p className="text-slate-300 mb-6">{contactData.message}</p>
            <div className="flex justify-center gap-3 items-center space-x-2 text-xl">
              <a
                href={`mailto:${contactData.email}`}
                className="text-blue-400 hover:underline text-sm md:text-2xl flex items-center gap-2"
              >
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
                </svg>{" "}
                E-mail
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-mandal-a30347294/"
                target="_blank"
              >
                <FaLinkedin className="text-blue-300 hover:cursor-pointer" />
              </a>
              <a href="https://github.com/aditya-wuw" target="_blank">
                <FaGithub className="hover:cursor-pointer" />
              </a>
              <a href="Aditya Mandal Resume 2025.pdf" target="_blank">
                CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Aditya Mandal. ©ATLUS. ©SEGA 
          </p>
          <p className="flex justify-center gap-2 items-center text-slate-500">
            <FaClock/>
            {lastUpdate}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
