'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
import HomeBookingForm from '../HomePage/HomeBookingForm'
import { rooms } from '../../lib/utilies/Rooms'

export default function RoomsGrid() {
  const [open, setOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)

  const handleBookNow = (room) => {
    setSelectedRoom(room)
    setOpen(true)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {rooms.map((room) => (
          <motion.div
            key={room.id}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-xl overflow-hidden
            shadow-[0_20px_40px_rgba(30,58,138,0.18)]
            border border-blue-100"
          >
            {/* IMAGE */}
            <div className="group overflow-hidden">
              <div className="relative h-60">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {room.title}{' '}
                <span className="text-sm font-medium">({room.size})</span>
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {room.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-600 text-xs" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => handleBookNow(room)}
                  className="px-4 py-2 rounded-md text-sm font-semibold
                  text-white bg-gradient-to-r from-blue-700 to-blue-500
                  hover:from-blue-800 hover:to-blue-600 transition"
                >
                  Book Now
                </button>

                <a
                  href="tel:+917014538182"
                  className="px-4 py-2 rounded-md text-sm font-semibold
                  bg-gray-800 text-white hover:bg-gray-900 transition"
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOOKING MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <HomeBookingForm
          roomId={selectedRoom?.id}
          roomTitle={selectedRoom?.title}
        />
      </Modal>
    </section>
  )
}
