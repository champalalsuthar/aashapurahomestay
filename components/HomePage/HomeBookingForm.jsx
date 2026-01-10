'use client'

import { use, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { sendEmailToBackend } from '../../lib/sendEmail'
import { useRouter } from 'next/navigation'

export default function HomeBookingForm() {
  const [activeTab, setActiveTab] = useState('booking')
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const [values, setValues] = useState({
    name: '',
    email: '',
    contact: '',
    checkin_date: '',
    checkout_date: '',
    purpose: 'Purpose of visit',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // ✅ today min date
  const today = useMemo(() => {
    const d = new Date()
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
  }, [])

  // ✅ checkout min date should be checkin+1
  const checkoutMin = useMemo(() => {
    if (!values.checkin_date) return today
    const d = new Date(values.checkin_date)
    d.setDate(d.getDate() + 1)
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
  }, [values.checkin_date, today])

  // If checkin changes, auto clear invalid checkout
  useEffect(() => {
    if (values.checkout_date && values.checkin_date) {
      if (values.checkout_date <= values.checkin_date) {
        setValues((prev) => ({ ...prev, checkout_date: '' }))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.checkin_date])

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    // ✅ remove error when user corrects input
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

    // contact
    if (!values.contact.trim()) e.contact = 'Mobile number is required.'
    else if (!/^[5-9]\d{9}$/.test(values.contact.trim()))
      e.contact = 'Mobile must be 10 digits and start with 5-9.'

    if (activeTab === 'booking') {
      // checkin date
      if (!values.checkin_date) e.checkin_date = 'Check-in date is required.'
      else if (values.checkin_date < today)
        e.checkin_date = 'Check-in must be today or future date.'

      // checkout date
      if (!values.checkout_date) e.checkout_date = 'Check-out date is required.'
      else if (values.checkout_date <= values.checkin_date)
        e.checkout_date = 'Check-out must be after check-in date.'
    }

    // message optional (not forcing)

    return e
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)

    try {
      const html_msg_body = `
      <div style="font-family:Arial,sans-serif; padding:16px;">
        <h2 style="color:#1d4ed8;">New Booking Enquiry</h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr><td><b>Name</b></td><td>${values.name}</td></tr>
          <tr><td><b>Email</b></td><td>${values.email}</td></tr>
          <tr><td><b>Mobile</b></td><td>${values.contact}</td></tr>
          <tr><td><b>Check-in</b></td><td>${values.checkin_date}</td></tr>
          <tr><td><b>Check-out</b></td><td>${values.checkout_date}</td></tr>
          <tr><td><b>Purpose</b></td><td>${values.purpose}</td></tr>
          <tr><td><b>Message</b></td><td>${values.message || "-"}</td></tr>
        </table>

        <hr/>
        <p style="font-size:12px;color:#64748b;">
          Maa Aashapura Homestay Website - Booking Form
        </p>
      </div>
    `

      await sendEmailToBackend({
        type: "booking",
        from_name: values.name,
        from_email: values.email,
        subject: `Booking Enquiry - ${values.name} (${values.checkin_date} to ${values.checkout_date})`,
        html_msg_body,
      })

      alert("Booking enquiry sent successfully!")
      setValues({
        name: "",
        email: "",
        contact: "",
        checkin_date: "",
        checkout_date: "",
        purpose: "Purpose of visit",
        message: "",
      })
      setErrors({})
      router.push('/')
    } catch (err) {
      alert(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center rounded-xl">

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-md bg-white
        rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        p-6 md:p-8 mb-4 "
      >

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-14"
        >
          Book<span className="text-blue-700">Your Stay</span>
        </motion.h2>

        {/* TABS */}
        {/* <div className="flex justify-center gap-3 mb-6">
          {['booking'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setErrors({})
              }}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold
              ${
                activeTab === tab
                  ? 'bg-blue-700 text-white shadow'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div> */}



        {/* FORM */}
        <form onSubmit={sendEmail} className="space-y-4">
          {/* NAME */}
          <div>
            <label className="label">Name</label>
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
            <label className="label">Email ID</label>
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

          {/* CONTACT */}
          <div>
            <label className="label">Mobile Number</label>
            <input
              name="contact"
              placeholder="10 digit mobile number"
              value={values.contact}
              onChange={(e) =>
                setField('contact', e.target.value.replace(/\D/g, '').slice(0, 10))
              }
              className={`input ${errors.contact ? 'inputError' : ''}`}
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>

          {activeTab === 'booking' && (
            <>
              {/* CHECKIN */}
              <div>
                <label className="label">Check-in Date</label>
                <input
                  aria-label="checkin date"
                  type="date"
                  name="checkin_date"
                  min={today}
                  value={values.checkin_date}
                  onChange={(e) => setField('checkin_date', e.target.value)}
                  className={`input ${errors.checkin_date ? 'inputError' : ''}`}
                />
                {errors.checkin_date && <p className="error">{errors.checkin_date}</p>}
              </div>

              {/* CHECKOUT */}
              <div>
                <label className="label">Check-out Date</label>
                <input
                  aria-label="checkout date"
                  type="date"
                  name="checkout_date"
                  min={checkoutMin}
                  value={values.checkout_date}
                  onChange={(e) => setField('checkout_date', e.target.value)}
                  className={`input ${errors.checkout_date ? 'inputError' : ''}`}
                  disabled={!values.checkin_date}
                />
                {errors.checkout_date && <p className="error">{errors.checkout_date}</p>}
                {!values.checkin_date && (
                  <p className="hint">Select check-in date first.</p>
                )}
              </div>

              {/* PURPOSE */}
              <div>
                <label className="label">Purpose of Visit</label>
                <select
                  name="purpose"
                  value={values.purpose}
                  onChange={(e) => setField('purpose', e.target.value)}
                  className="input"
                >
                  <option>Purpose of visit</option>
                  <option>Business</option>
                  <option>Leisure</option>
                  <option>Corporate Stay</option>
                </select>
              </div>
            </>
          )}

          {/* MESSAGE */}
          <div>
            <label className="label">Message</label>
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="3"
              value={values.message}
              onChange={(e) => setField('message', e.target.value)}
              className="input resize-none"
            />
          </div>

          <button
            disabled={loading}
            className="w-full mt-2 py-3 rounded-md text-white
            font-semibold bg-gradient-to-r from-blue-700 to-blue-500
            hover:from-blue-800 hover:to-blue-600
            transition-all shadow-lg"
          >
            {loading ? 'Booking...' : 'BOOK NOW'}
          </button>
        </form>
      </motion.div>

      {/* INPUT STYLE */}
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
          padding: 0.65rem 0.75rem;
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
        .hint {
          margin-top: 0.35rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
      `}</style>
    </section>
  )
}
