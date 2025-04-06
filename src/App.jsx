import { useState } from "react";
import profilePic from "./Assets/464cb0746bbaf2b962d7448bc987c8bb.jpg";
import screenshot1 from "./Assets/Screenshot 2025-03-24 193304.png";
import screenshot2 from "./Assets/Screenshot 2025-04-04 184020.png";
import screenshot3 from "./Assets/Screenshot 2025-03-01 200642.png";
import screenshot4 from "./Assets/Screenshot 2025-03-31 225106.png";
import screenshot5 from "./Assets/Screenshot 2025-04-06 184611.png"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <nav className="sticky top-0 z-10 bg-black/90 backdrop-blur-sm border-b border-slate-800">
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
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 px-4 py-2">
            <a href="#about" className="block py-2 hover:text-blue-400 transition">
              About
            </a>
            <a href="#skills" className="block py-2 hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#projects" className="block py-2 hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="block py-2 hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        )}
      </nav>

      <section className="container mx-auto py-16 md:py-20 flex flex-col items-center justify-center text-center relative">
        <div className="mb-8 ">
          <img
            src={profilePic}
            alt="Aditya Mandal"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/20 z-10 relative"
          />
        </div>
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Aditya Mandal</span>
        </h1>
        <p className="text-sm md:text-xl text-slate-300 max-w-2xl mb-8 ">
          FullStack Developer specializing in Frontend and building modern, responsive web
          applications with REACT, NODE,and TailwindCSS.
        </p>
        <div className="flex space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-3 rounded-md font-medium transition text-sm md:text-xl z-10 relative"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-slate-700 hover:border-blue-400 px-6 py-3 rounded-md font-medium transition text-sm md:text-xl z-10 relative"
          >
            View My Work
          </a>
        </div>
      <div className="absolute inset-0 bg-[url(https://images2.alphacoders.com/134/1348285.png)] bg-cover bg-center bg-no-repeat opacity-30 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] 
  mask"></div>
      </section>

      <section id="about" className="bg-slate-900/80 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-slate-300">
            <p className="mb-4">
              I'm a frontend developer with a keen eye for creating
              clean, efficient, and user-friendly websites. My journey in web
              development began with a curiosity about how websites work, which
              evolved into having a career focused on building engaging digital
              experiences.
            </p>
            <p>
              I enjoy the process of transforming ideas into reality using code.
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a FromSoft game.<br/> yeah I'm a dark souls fan
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-black/60">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                REACT.js
              </h3>
              <p className="text-slate-300">
                Building interactive UIs with React's component-based
                architecture, state management and hooks
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                TailwindCSS
              </h3>
              <p className="text-slate-300">
                Creating responsive, utility-first designs with modern
                aesthetics and optimized workflows.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">NODE</h3>
              <p className="text-slate-300">
                Developing backend services and APIs with Node.js to support
                frontend applications.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Frontend Fundamentals
              </h3>
              <p className="text-slate-300">
                Strong foundation in HTML, CSS, JavaScript, and modern web
                development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-900/90 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="fixscroll flex space-x-6 min-w-max px-2">
              {/*  projects */}
              
              <div className="bg-black/60 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400 transition group w-80 md:w-96 flex-shrink-0">
                <div className="h-48 bg-slate-800 overflow-hidden">
                  <img
                    src={screenshot5}
                    alt="blog"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    HMS-dashbord
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Was tasked to build a Admin Hospital Management System Dashbord with the help of Cursor and my prefered tech stack
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://hms-dashbord-1.onrender.com/"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/Johanlee69/HMS-Dashbord"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>


              <div className="bg-black/60 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400 transition group w-80 md:w-96 flex-shrink-0">
                <div className="h-48 bg-slate-800 overflow-hidden">
                  <img
                    src={screenshot1}
                    alt="blog"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    Task Manager(Level UP)
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Task manager app with a level up theme.where users can add
                    tasks, delete tasks, and mark tasks as completed and gain xp and level up
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://level-up-guest.onrender.com"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/Johanlee69/Level-UP--Guest-/tree/main"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-black/60 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400 transition group w-80 md:w-96 flex-shrink-0">
                <div className="h-48 bg-slate-800 overflow-hidden">
                  <img
                    src={screenshot4}
                    alt="blog"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    A Password Manager
                  </h3>
                  <p className="text-slate-300 mb-4">
                    A Password manager tool inspried by the game Dark Souls III. I havn't tested this project properly there might be some bugs
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://pass-souls-iii.onrender.com/"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/Johanlee69/pass-souls-III"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-black/60 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400 transition group w-80 md:w-96 flex-shrink-0">
                <div className="h-48 bg-slate-800 overflow-hidden">
                  <img
                    src={screenshot2}
                    alt="blog"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    ChatGPT wrapper
                  </h3>
                  <p className="text-slate-300 mb-4">
                    A clone of the ChatGPT web app, with MERN stack currently I
                    have only the basic wrapper, working on the full stack
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      TailwindCSS
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      RESTful
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      MERN
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Johanlee69/ChatGPT--Clone-wrapper"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-400 transition group w-80 md:w-96 flex-shrink-0">
                <div className="h-48 bg-slate-800 overflow-hidden">
                  <img
                    src={screenshot3}
                    alt="blog"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    A Blog Social media website
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Tried to make a social media blog website where users can
                    share their story
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      TailwindCSS
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      API Integration
                    </span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                      MERN
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Johanlee69/Blog-website"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-black/60">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="max-w-xl mx-auto bg-slate-900/80 p-8 rounded-lg border border-slate-800 text-center">
            <p className="text-slate-300 mb-6">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
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
                href="mailto:johnthesheepbuzz605@gmail.com"
                className="text-blue-400 hover:underline text-sm md:text-2xl"
              >
                johnthesheepbuzz605@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500">
            © 2025 Aditya Mandal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
