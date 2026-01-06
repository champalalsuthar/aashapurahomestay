'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function PromoStrip() {
  return (
    <section className="w-full">

      {/* TOP WHITE STRIP */}
      <div className="bg-white py-6 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row 
          items-center justify-center gap-4"
        >
          <p className="text-base md:text-lg text-gray-800 font-medium text-center">
            Great deals for corporates and long stay guests!
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2
            bg-[#1E3A8A] text-white font-semibold rounded-md
            shadow-lg hover:bg-[#2563EB] hover:scale-105
            transition-all duration-300"
          >
            Contact Us →
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM BLUE STRIP */}
      <div className="bg-[#1E3A8A] py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <p
            className="text-white text-lg md:text-xl font-semibold
            flex flex-wrap justify-center items-center gap-2"
          >
            For pricing, special offers, discounts and availability WhatsApp on
            <a
              href="https://wa.me/919489573984"
              target="_blank"
              className="inline-flex items-center gap-2 font-bold ml-1
              hover:underline"
            >
              9489573984
              <FaWhatsapp className="text-green-400 text-xl" />
            </a>
          </p>
        </motion.div>
      </div>

    </section>
  )
}
