'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function HomeBookingForm() {
  const [activeTab, setActiveTab] = useState('booking')
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      alert('Booking enquiry sent successfully!')
      e.target.reset()
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">

      {/* BACKGROUND BANNER (DESKTOP ONLY) */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/booking-banner.png')" }}
      />
      <div className="hidden md:block absolute inset-0 bg-blue-900/40" />

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 w-full  max-w-md bg-white
        rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        p-6 md:p-8 my-8"
      >

        {/* HEADER */}
        <div className="text-center mb-6">
          <span className="inline-block mb-2 px-4 py-1 text-xs font-semibold
          bg-blue-100 text-blue-700 rounded-full">
            BOOK NOW
          </span>

          <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>
          <div className="w-14 h-1 bg-blue-600 mx-auto mt-2 rounded" />
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-6">
          {['booking', 'jobs', 'vendors'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold
              ${activeTab === tab
                ? 'bg-blue-700 text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* INFO (VENDORS TAB) */}
        {activeTab === 'vendors' && (
          <div className="mb-4 p-3 text-sm rounded-md
          bg-blue-50 text-blue-800">
            Hotel management specific vendors can send in your details.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={sendEmail} className="space-y-4">

          <input name="name" placeholder="Name" required className="input" />
          <input name="email" placeholder="Email ID" type="email" required className="input" />
          <input name="contact" placeholder="Contact" required className="input" />

          {activeTab === 'booking' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <input type="date" name="checkin_date" className="input" />
                <input type="time" name="checkin_time" className="input" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input type="date" name="checkout_date" className="input" />
                <input type="time" name="checkout_time" className="input" />
              </div>

              <select name="purpose" className="input">
                <option>Purpose of visit</option>
                <option>Business</option>
                <option>Leisure</option>
                <option>Corporate Stay</option>
              </select>

              <select name="location" className="input">
                <option>Choose your location</option>
                <option>Coimbatore</option>
                <option>Nearby Areas</option>
              </select>
            </>
          )}

          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            className="input resize-none"
          />

          <button
            disabled={loading}
            className="w-full mt-2 py-3 rounded-md text-white
            font-semibold bg-gradient-to-r from-blue-700 to-blue-500
            hover:from-blue-800 hover:to-blue-600
            transition-all shadow-lg"
          >
            {loading ? 'Sending...' : 'SEND NOW'}
          </button>
        </form>
      </motion.div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.65rem 0.75rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }
      `}</style>
    </section>
  )
}
