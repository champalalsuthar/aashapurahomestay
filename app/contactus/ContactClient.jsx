'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function ContactClient() {
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))

    // ✅ remove error as user types
    setErrors((prev) => {
      if (!prev[name]) return prev
      const { [name]: _, ...rest } = prev
      return rest
    })
  }

  const validate = () => {
    const e = {}

    // name
    if (!values.name.trim()) e.name = 'Name is required.'

    // email
    if (!values.email.trim()) e.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      e.email = 'Enter a valid email.'

    // phone
    if (!values.phone.trim()) e.phone = 'Mobile number is required.'
    else if (!/^[5-9]\d{9}$/.test(values.phone.trim()))
      e.phone = 'Mobile must be 10 digits and start with 5-9.'

    // message
    if (!values.message.trim()) e.message = 'Message is required.'

    return e
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      alert('Message sent successfully!')

      setValues({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      setErrors({})
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
              aashapurahomestay@gmail.com
            </p>

            <p className="text-sm text-gray-600 mt-4">
              Location : Railway station ring road, behind Hotel Dollar, railway fatak Kutch bhuj, 370001
            </p>
          </div>
        </div>

        {/* FORM */}
        <div
          className="bg-white rounded-xl p-8
          shadow-[0_25px_50px_rgba(30,58,138,0.2)]
          border border-blue-100"
        >
          <form onSubmit={sendEmail} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="label">Your Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={(e) => setField('name', e.target.value)}
                className={`input ${errors.name ? 'inputError' : ''}`}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label className="label">Your Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                className={`input ${errors.email ? 'inputError' : ''}`}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* PHONE */}
            <div>
              <label className="label">Contact Number</label>
              <input
                name="phone"
                placeholder="10 digit mobile number"
                value={values.phone}
                onChange={(e) =>
                  setField('phone', e.target.value.replace(/\D/g, '').slice(0, 10))
                }
                className={`input ${errors.phone ? 'inputError' : ''}`}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="label">Your Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message"
                value={values.message}
                onChange={(e) => setField('message', e.target.value)}
                className={`input resize-none ${errors.message ? 'inputError' : ''}`}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

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
        .label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.35rem;
        }
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
        .inputError {
          border-color: #ef4444;
          box-shadow: 0 0 0 1px #ef4444;
        }
        .error {
          margin-top: 0.35rem;
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 600;
        }
      `}</style>
    </main>
  )
}
