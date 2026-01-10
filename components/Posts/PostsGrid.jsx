'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import posts from '../../lib/utilies/posts'

export default function PostsGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-xl overflow-hidden
            shadow-[0_20px_40px_rgba(30,58,138,0.18)]
            border border-blue-100"
          >
            {/* IMAGE */}
            <Link href={`/posts/${post.slug}`} className="group block overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* CONTENT */}
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">
                {new Date(post.date).toDateString()}
              </p>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 mb-5">
                {post.excerpt}
              </p>

              <Link
                href={`/posts/${post.slug}`}
                className="inline-block text-sm font-semibold text-white
                px-4 py-2 rounded-md bg-gradient-to-r from-blue-700 to-blue-500
                hover:from-blue-800 hover:to-blue-600 transition shadow-md"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
