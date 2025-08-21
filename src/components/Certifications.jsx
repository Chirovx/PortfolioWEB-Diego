"use client"

import { motion } from "framer-motion"
import { CERTIFICATES } from "../constants"
import { useState } from "react"

export const Certifications = () => {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % CERTIFICATES.length)
  const prev = () => setIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length)

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificaciones
      </motion.h2>

      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-2xl h-[650px] overflow-hidden rounded-2xl shadow-lg">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center items-center bg-white dark:bg-stone-900"
          >
            <img
              src={CERTIFICATES[index].img}
              alt={CERTIFICATES[index].title}
              className="max-h-[620px] rounded-lg object-contain"
            />
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-stone-800 text-white opacity-80 hover:opacity-100"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-stone-800 text-white opacity-80 hover:opacity-100"
          >
            ▶
          </button>
        </div>

        {/* Título */}
        <p className="mt-4 text-lg text-stone-600 text-yellow-400">
          {CERTIFICATES[index].title}
        </p>

        {/* Botón Ver usando link del objeto */}
        <a
          href={CERTIFICATES[index].link} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 text-sm text-stone-800 mb-10"
        >
          Ver certificado
        </a>
      </div>
    </div>
  )
}

export default Certifications