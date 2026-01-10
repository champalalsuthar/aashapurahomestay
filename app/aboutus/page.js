import { FaHome, FaBed, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata = {
  title: 'About Us | Maa Aashapura Homestay',
  description:
    'Maa Aashapura Homestay offers comfortable AC/Non-AC rooms, dormitory stays, and affordable accommodation in Pune.',
}

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white mt-20">

      {/* HERO */}
      <section className="py-20 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          About <span className="text-blue-700">Maa Aashapura Homestay</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          A comfortable, affordable, and peaceful stay designed for families,
          business travellers, students, and long-stay guests.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-10 md:grid-cols-3">

        {/* CARD 1 */}
        <div className="bg-white rounded-xl p-8 shadow-[0_20px_40px_rgba(30,58,138,0.18)]
        border border-blue-100">
          <FaHome className="text-blue-700 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maa Aashapura Homestay provides safe and hygienic accommodation with
            a homely environment. We focus on comfort, cleanliness, and personal care.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-xl p-8 shadow-[0_20px_40px_rgba(30,58,138,0.18)]
        border border-blue-100">
          <FaBed className="text-blue-700 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Dormitory & Homestay options with AC / Non-AC rooms, ideal for
            short and long stays at affordable pricing.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-xl p-8 shadow-[0_20px_40px_rgba(30,58,138,0.18)]
        border border-blue-100">
          <FaMapMarkerAlt className="text-blue-700 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-3">Our Location</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Conveniently located in Kutch bhuj, bhuj — well connected and suitable
            for corporate, family, and student stays.
          </p>
        </div>

      </section>  
    </main>
  )
}
