import profilePic from "../assets/DiegoValdesProfile.png"
import CvDiegoValdes from "../assets/CvDiegoValdes.pdf"
import { TypeAnimation } from 'react-type-animation'
import {motion} from "framer-motion"




const ContainerVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      straggerChildren: 0.5,
    }
  }
}

const ChildVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x: 0, transition: {duration: 0.5}}
}

const Hero = () => {
  const HERO_CONTENT = "Soy Desarrollador Full-Stack con pasión por crear sistemas web, cuidando tanto la experiencia del usuario como la arquitectura interna. Disfruto cada etapa del proceso. Además, me apasiona el análisis de datos, encontrando patrones e insights que aporten valor real a los proyectos. Esta combinación me permite moverme con soltura entre el desarrollo web y el análisis, ofreciendo soluciones completas."

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Diego foto perfil"
              className="border border-stone-900 rounded-3xl"
              width={432}
              height={432}
              initial={{x:100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1}}/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              <span className="text-yellow-400">D</span>iego <span className="text-yellow-400">V</span>aldés <span className="text-yellow-400">D</span>iaz
            </h2>
            <TypeAnimation
              sequence={[
                'Desarrollador Full-Stack',
                2000,
                'Analista de datos',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-yellow-400 text-3xl tracking-tighter drop-shadow-sm"
            />
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
              <a
                href={CvDiegoValdes}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 text-sm text-stone-800 mb-10"
              >
                Descargar CV
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero