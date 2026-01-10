import PostsBanner from "../../components/Posts/PostsBanner"
import PostsGrid from "../../components/Posts/PostsGrid"


export const metadata = {
  title: 'Posts | Maa Aashapura Homestay',
  description: 'Latest posts, updates and announcements from Maa Aashapura Homestay.',
}

export default function PostsPage() {
  return (
    <main className="mt-20">
      <PostsBanner />
      <PostsGrid />
    </main>
  )
}
