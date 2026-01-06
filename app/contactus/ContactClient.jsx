'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function ContactClient() {
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
      alert('Message sent successfully!')
      e.target.reset()
    } catch (err) {
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white py-20 mt-20">
      <div className="max-w-5xl mx-auto px-6 grid gap-12 md:grid-cols-2">

        {/* LEFT INFO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact <span className="text-blue-700">Us</span>
          </h1>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              +91 86962 82980
            </p>

            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/918696282980"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp Chat
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              contact@aashapurahomestay.com
            </p>

            <p className="text-sm text-gray-600 mt-4">
              Location: Katraj, Pune
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-xl p-8
          shadow-[0_25px_50px_rgba(30,58,138,0.2)]
          border border-blue-100">
          <form onSubmit={sendEmail} className="space-y-4">
            <input name="name" placeholder="Your Name" required className="input" />
            <input name="email" type="email" placeholder="Your Email" required className="input" />
            <input name="phone" placeholder="Contact Number" required className="input" />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="input resize-none"
            />

            <button
              disabled={loading}
              className="w-full py-3 rounded-md text-white font-semibold
              bg-gradient-to-r from-blue-700 to-blue-500
              hover:from-blue-800 hover:to-blue-600 transition shadow-lg"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.7rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }   
      `}</style>
    </main>
  )
}
