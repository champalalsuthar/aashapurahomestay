'use client'

import { motion } from 'framer-motion'
import { FaBed, FaUserCheck, FaRupeeSign } from 'react-icons/fa'

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold
          text-gray-800 mb-14"
        >
          WHY CHOOSE <span className="text-blue-700">AASHAPURA HOMESTAY</span> FOR YOUR STAY?
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -8, rotateX: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-xl p-8
            shadow-[0_20px_40px_rgba(30,58,138,0.15)]
            border border-blue-100"
          >
            <div className="text-blue-700 text-4xl mb-4">
              <FaBed />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              SPACIOUS ROOMS
            </h3>

            <p className="text-gray-600 leading-relaxed">
              All our properties feature large, spacious rooms equipped with
              all necessary modern amenities to ensure a comfortable stay.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -8, rotateX: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-xl p-8
            shadow-[0_20px_40px_rgba(30,58,138,0.15)]
            border border-blue-100"
          >
            <div className="text-blue-700 text-4xl mb-4">
              <FaUserCheck />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              PERSONAL CARE
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Direct involvement of promoters ensures attention to every detail.
              One caretaker per four rooms guarantees 24/7 personalized care.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -8, rotateX: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-xl p-8
            shadow-[0_20px_40px_rgba(30,58,138,0.15)]
            border border-blue-100"
          >
            <div className="text-blue-700 text-4xl mb-4">
              <FaRupeeSign />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ECONOMICAL
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our rooms are competitively priced and suitable for short and long
              stays, offering up to 60% savings compared to similar hotel rooms.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
