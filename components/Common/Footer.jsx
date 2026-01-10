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
import { FaHome, FaInfoCircle, FaFileContract, FaUserShield } from 'react-icons/fa'

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
            <a href="tel:+91701438182" className="hover:text-blue-400">
              +91 70145 38182
            </a>
          </p>

          <p className="flex items-center gap-3 mb-3">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/917014538182"
              target="_blank"
              className="hover:text-blue-400"
            >
              WhatsApp Chat
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:aashapurahomestay@gmail.com"
              className="hover:text-blue-400"
            >
              aashapurahomestay@gmail.com
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
              <Link
                href="/posts/dormitory-homestay-ac-nonac"
                className="hover:text-blue-400 transition"
              >
                Dormitory & Homestay – AC / Non-AC
              </Link>
            </li>
            <li>
              <Link
                href="/posts/affordable-stay-in-pune"
                className="hover:text-blue-400 transition"
              >
                Affordable stay in Pune
              </Link>
            </li>
            <li>
              <Link
                href="/posts/comfortable-long-short-stays"
                className="hover:text-blue-400 transition"
              >
                Comfortable long & short stays
              </Link>
            </li>
          </ul>
        </div>



        {/* Quick LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaHome className="text-blue-500" /> Home
              </Link>
            </li>

            <li>
              <Link
                href="/aboutus"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaInfoCircle className="text-blue-500" /> About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contactus"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaPhoneAlt className="text-blue-500" /> Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/terms-conditions"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaFileContract className="text-blue-500" /> Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaUserShield className="text-blue-500" /> Privacy Policy
              </Link>
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
            Location : Railway station ring road, behind Hotel Dollar, railway fatak Kutch bhuj, 370001
          </p>

          <p className="text-sm text-gray-300">
            Email:{' '}
            <a
              href="mailto:aashapurahomestay@gmail.com"
              className="hover:text-blue-400"
            >
              aashapurahomestay@gmail.com
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
