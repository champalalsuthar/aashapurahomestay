import Image from 'next/image'
import Link from 'next/link'
import posts from '../../../lib/utilies/posts'

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug)

  return {
    title: post ? `${post.title} | Maa Aashapura Homestay` : 'Post Not Found',
    description: post?.excerpt || 'Post details',
  }
}

export default function SinglePostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <main className="py-20 mt-20 text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <Link className="text-blue-700 underline" href="/posts">
          Back to Posts
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white mt-20">
      <div className="w-full md:p-6 px-6">

        <Link href="/posts" className="text-blue-700 font-semibold hover:underline">
          ← Back to Posts
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          {new Date(post.date).toDateString()}
        </p>

        <div className="relative w-full h-[300px] md:h-[700px] mt-8 rounded-xl overflow-hidden
        shadow-[0_25px_50px_rgba(30,58,138,0.18)] border border-blue-100">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <article className="mt-10 bg-white rounded-xl p-8
        shadow-[0_25px_50px_rgba(30,58,138,0.18)] border border-blue-100">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content.trim()}
          </p>
        </article>
      </div>
    </main>
  )
}
