'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rohit Sharma',
    role: 'Business Traveller',
    review:
      'Very clean rooms, peaceful environment and excellent service. The staff was supportive and the stay was extremely comfortable.',
    rating: 5,
  },
  {
    name: 'Neha Verma',
    role: 'Family Stay',
    review:
      'Affordable pricing with premium facilities. AC rooms were well maintained and the location was easy to reach.',
    rating: 5,
  },
  {
    name: 'Amit Kulkarni',
    role: 'Long Stay Guest',
    review:
      'Perfect for long stays. Feels like home. Highly recommended for anyone visiting Pune for work or travel.',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-14"
        >
          WHAT OUR <span className="text-blue-700">GUESTS SAY</span>
        </motion.h2>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotateX: 5 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="bg-white rounded-xl p-8
              shadow-[0_25px_50px_rgba(30,58,138,0.18)]
              border border-blue-100"
            >
              {/* STARS */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{t.review}”
              </p>

              {/* USER */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {t.name}
                </p>
                <p className="text-sm text-blue-600">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
