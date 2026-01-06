'use client'

import { motion } from 'framer-motion'

export default function RoomsBanner() {
  return (
    <section
      className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/rooms-banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-3xl md:text-5xl font-extrabold text-center tracking-wide"
      >
        AFFORDABLE ACCOMMODATION IN COIMBATORE!
      </motion.h1>
    </section>
  )
}
