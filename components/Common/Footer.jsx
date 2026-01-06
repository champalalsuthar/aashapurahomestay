import Link from 'next/link'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200 mt-20">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10
        md:grid-cols-2 lg:grid-cols-4">

        {/* BOOK NOW */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            BOOK NOW!
          </h3>

          <p className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-blue-500" />
            <a href="tel:+918696282980" className="hover:text-blue-400">
              +91 86962 82980
            </a>
          </p>

          <p className="flex items-center gap-3 mb-3">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/918696282980"
              target="_blank"
              className="hover:text-blue-400"
            >
              WhatsApp Chat
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:book@aashapurahomestay.com"
              className="hover:text-blue-400"
            >
              book@aashapurahomestay.com
            </a>
          </p>
        </div>

        {/* RECENT POSTS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            RECENT POSTS
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/rooms" className="hover:text-blue-400 transition">
                Dormitory & Homestay – AC / Non-AC
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-blue-400 transition">
                Affordable stay in Pune
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-blue-400 transition">
                Comfortable long & short stays
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            FOLLOW US ON
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
              <FaPinterestP /> Pinterest
            </li>
            <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
              <FaYoutube /> Youtube
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            CONTACT INFO
          </h3>

          <p className="text-sm mb-3 text-gray-300">
            Maa Aashapura Homestay
          </p>

          <p className="text-sm mb-3 text-gray-300">
            Dormitory & Homestay (AC / Non-AC)
          </p>

          <p className="text-sm mb-3 text-gray-300">
            Location: Katraj, Pune
          </p>

          <p className="text-sm text-gray-300">
            Email:{' '}
            <a
              href="mailto:contact@aashapurahomestay.com"
              className="hover:text-blue-400"
            >
              contact@aashapurahomestay.com
            </a>
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row
        items-center justify-between gap-4 text-sm text-gray-400">

        <p className="text-center md:text-left">
          Maa Aashapura Homestay © 2026 | Dormitory & Homestay Provider
        </p>

        <p className="text-center md:text-right">
          Designed & Developed by{' '}
          <a
            href="https://www.champalalsuthar.dev"
            target="_blank"
            className="text-blue-400 font-medium hover:underline"
          >
            Champa Lal Suthar
          </a>
        </p>
      </div>
    </footer>
  )
}
