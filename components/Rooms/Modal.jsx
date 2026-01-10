'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function Modal({ open, onClose, children }) {

  // ✅ Background scroll lock when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP (Blur + Dark Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="relative h-[85vh] overflow-y-auto w-full max-w-md bg-white rounded-xl p-6
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-50 p-2 rounded-full
                bg-red-500 text-white shadow-md hover:bg-red-600 transition"
              >
                <FaTimes />
              </button>

              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
