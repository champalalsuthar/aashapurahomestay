'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  '/banner1.png',
  '/banner2.png',
  '/banner3.png',
  '/banner4.png',
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          i === index && (
            <motion.div
              key={i}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              exit={{ clipPath: 'inset(0 0 0 100%)' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt="Homestay Banner"
                fill
                priority
                className="object-cover scale-110"
              />
            </motion.div>
          )
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-xl"
        >
          PERFECT LOCATION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl"
        >
          Situated in the heart of Kutch-Bhuj.
        </motion.p> */}

        {/* CTA */}
        {/* <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-40"
        >
          <button className="px-8 py-3 text-lg font-semibold rounded-full
            bg-gradient-to-r from-purple-600 to-blue-600
            text-white shadow-xl hover:scale-105 transition">
            Book Your Stay
          </button>
        </motion.div> */}
      </div>
    </section>
  )
}
