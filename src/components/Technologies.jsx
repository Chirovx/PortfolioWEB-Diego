import { BiLogoPostgresql } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { SiHtml5, SiDjango, SiTailwindcss, SiPython, SiJavascript, SiTableau, SiWordpress, SiSass, SiGoogleads } from "react-icons/si"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    }
  }
})


const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          title="React.js">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          title="Django"
        className="p-4">
          <SiDjango className="text-7xl text-emerald-700" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          title="PostgreSQL"
        className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.2)}
          title="JavaScript"
        className="p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          title="Python"
        className="p-4">
          <SiPython className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          title="Tailwindcss"
        className="p-4">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          title="Sass"
        className="p-4">
          <SiSass className="text-7xl text-pink-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.3)}
          title="HTML"
        className="p-4">
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          title="Tableau"
        className="p-4">
          <SiTableau className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          title="WordPress"
          className="pb-4">
          <SiWordpress className="text-7xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies