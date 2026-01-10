'use client'

import { motion } from 'framer-motion'

export default function PostsBanner() {
  return (
    <section
      className="relative w-full h-[35vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/posts/posts-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-3xl md:text-5xl font-extrabold text-center px-6"
      >
        LATEST <span className="text-blue-300">UPDATES</span> & POSTS
      </motion.h1>
    </section>
  )
}
