import { motion } from 'motion/react'
import { projectsData } from '../../../data'
import { Animation } from '../../animationConfig'
const Projects = () => {
  return (
    <section id="projects">
          <motion.div
            className="container mx-auto px-4 relative hover:cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circInOut" }}
          >
            <div className="m-5 relative z-10">
              <motion.h2
                className="persona5Tittle text-center p-1 text-5xl text-blue-400/80 hover:cursor-default"
                variants={Animation.Suigle()}
                initial={"initial"}
                animate={"animate"}
              >
                {projectsData.title}
              </motion.h2>
              <h1 className="text-center p-1 text-gray-400">
                A collection of my work spanning from Front-end to full-stack
                projects
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
                      <div className="flex space-x-4 ">
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
  )
}

export default Projects
