'use client'

import { motion } from 'framer-motion'

const locations = [
  {
    name: 'Maa Aashapura Homestay – Bhuj, Kutch',
    rating: '4.6 ⭐ (120 reviews)',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1648.4575347394475!2d69.67182410477614!3d23.26566972070905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAddress%20.%20Railway%20station%20ring%20road%2C%20behind%20Hotel%20Dollar%2C%20railway%20fatak%20Kutch%20bhuj%20370001!5e0!3m2!1sen!2sin!4v1767725059547!5m2!1sen!2sin',
    active: true,
  },
  {
    name: 'Aashapura Homestay – Pune (Coming Soon)',
    rating: 'Launching Soon',
    mapSrc:
      'https://www.google.com/maps?q=Pune,Maharashtra&output=embed',
    active: false,
  },
  {
    name: 'Aashapura Homestay – Hinjewadi (Coming Soon)',
    rating: 'Launching Soon',
    mapSrc:
      'https://www.google.com/maps?q=Hinjewadi,Pune&output=embed',
    active: false,
  },
]


export default function Locations() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-14"
        >
          OUR <span className="text-blue-700">LOCATIONS</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {locations.map((loc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white rounded-xl overflow-hidden
              shadow-[0_25px_50px_rgba(30,58,138,0.18)]
              border border-blue-100"
            >
              {/* MAP */}
              <div className="relative h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.382949343627!2d69.6724359!3d23.265531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e3a5e3d96aed%3A0x26c9a4e619cabf28!2sAashapura%20home%20stay!5e0!3m2!1sen!2sin!4v1768020728984!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {!loc.active && (
                  <div className="absolute inset-0 flex items-center justify-center
                  bg-white/70 text-blue-800 font-semibold text-lg">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {loc.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {loc.rating}
                </p>

                {loc.active ? (
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-block text-sm font-semibold
                    text-white px-5 py-2 rounded-md
                    bg-gradient-to-r from-blue-700 to-blue-500
                    hover:from-blue-800 hover:to-blue-600
                    transition shadow-md"
                  >
                    Get Directions
                  </a>
                ) : (
                  <span className="text-sm font-medium text-blue-700">
                    Opening Soon in Pune
                  </span>
                )}
              </div>
            </motion.div>
          ))}

        </div>

        {/* CENTER MESSAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-semibold text-blue-900">
            Relax and Enjoy your Stay
          </p>
        </motion.div>

      </div>
    </section>
  )
}
