import { Animation } from "../../animationConfig"
import { contactData } from "../../../data"
import { motion } from 'motion/react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <motion.h2
            className="persona5Tittle text-4xl md:text-6xl mb-12 text-center"
            variants={Animation.Suigle()}
            initial={"initial"}
            animate={"animate"}
          >
            {contactData.title.split(" ")[0]}{" "}
            <span className="text-blue-400">
              {contactData.title.split(" ")[1]}
            </span>
          </motion.h2>
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
  )
}

export default Contact
