import { useState, useEffect, useRef, Suspense, lazy } from "react";
import profilePic from "./Assets/logo.png";
import Persona3 from "./Assets/Persona 3 Reload Menu Wallpaper.mp4";
import P3buttons from "./Components/P-3button";
import P3TittleScreenText from "./Components/P3-TittleScreenText";

import { navLinks, heroData, skillsData } from "../data";

import { Animation } from "./animationConfig.js";
import { motion } from "motion/react";

const Projects = lazy(() => import("./Components/Projects/projects"));
const Contact = lazy(() => import("./Components/Contact/Contact.jsx"));
const Footer = lazy(() => import("./Components/footer/Footer.jsx"));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            className="md:hidden text-blue-500 focus:outline-none"
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
                className="hover:text-blue-400 transition cursor-pointer text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div
          className={`md:hidden bg-slate-900/50 overflow-hidden transition-all duration-300 ease-in-out ${
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
                className="block py-2 hover:text-blue-400 transition cursor-pointer text-blue-300"
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
        <h1 className="mb-6 relative text-start">
          <motion.p
            className="relative z-11 md:right-25 text-blue-100 persona5Tittle md:text-7xl text-6xl mt-5 md:mt-0"
            variants={Animation.Suigle()}
            initial={"initial"}
            animate={"animate"}
          >
            Hi, I'm
          </motion.p>

          <span className="relative md:absolute md:top-[-45%] left-3 md:left-39 z-10 max-w-[50vw]">
            <P3TittleScreenText lable={heroData.name} />
          </span>
        </h1>
        <p className="text-sm mx-5 md:text-xl text-slate-300 max-w-2xl mb-8">
          {heroData.role}
        </p>
        <div className="flex md:gap-5 lg:gap-0">
          {heroData.buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              onClick={(e) => {
                e.preventDefault();
                const targetId = button.href.substring(1);
                smoothScroll(targetId);
              }}
              className={"relative z-10"}
            >
              <P3buttons lable={button.label} />
            </a>
          ))}
        </div>
        <motion.video
          src={Persona3}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-[70%] md:h-full object-cover [mask-image:radial-gradient(circle_at_center,black_20%,transparent_90%)] mask md:scale-x-[-1]"
          variants={Animation.fade()}
          initial={"initial"}
          animate={"animate"}
        ></motion.video>
      </section>

      <div className="grid-bg bg-black/70 relative">
        <section id="skills" className="py-5  relative select-none">
          <div className="container mx-auto px-4 relative">
            <div className="m-5">
              <div className="flex justify-center items-center">
                <motion.h2
                  className="persona5Tittle text-center p-1 text-5xl text-blue-400/80 hover:cursor-default"
                  variants={Animation.Suigle()}
                  initial={"initial"}
                  animate={"animate"}
                >
                  {skillsData.title}
                </motion.h2>
              </div>
              <h1 className="text-center p-1 text-gray-400">
                Full-stack developer skilled in modern web tech, APIs,
                databases, and UI design
              </h1>
            </div>
            <div className=" mx-auto lg:max-w-4xl md:max-w-xl select-none">
              <div className="md:grid flex flex-col gap-3 mx-5 md:mx-0 grid-rows-2 md:grid-cols-4 grid-cols-2 place-items-center lg:gap-3 md:gap-12 lg:mb-5 md:mb-10">
                {skillsData.items.map((skill, index) => (
                  <div
                    key={index}
                    className=" hover:animate-none bg-blur transition lg:scale-[90%] lg:hover:scale-[100%] 
                  cursor-pointer lg:w-55 lg:h-50 md:w-50 md:h-30 md:scale-[70%]"
                  >
                    <div className="bg-slate-900/50 border border-slate-800 hover:border-blue-400 lg:h-55 lg:w-60 p-3 md:w-50 md:h-55">
                      <h3 className="text-md md:text-xl font-semibold mb-4 text-blue-400">
                        {skill.name}
                      </h3>
                      <p className="text-[80%] md:text-md lg:text-[100%] text-blue-200">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Suspense
          fallback={<div className="bg-transparent p-3"></div>}
        >
          <Projects />
        </Suspense>
      </div>
      <Suspense fallback={<div className="bg-transparent p-3"></div>}>
        <Contact />
      </Suspense>
       <Suspense fallback={<div className="bg-transparent p-3"></div>}>
        <Footer />
      </Suspense>
      
    </div>
  );
}

export default App;
