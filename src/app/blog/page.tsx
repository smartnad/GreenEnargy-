import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

const POSTS = [
    {
        id: 1,
        title: "Understanding PM Surya Ghar Yojana 2025",
        excerpt: "A complete guide to the new subsidy rules and how you can benefit from them.",
        date: "Nov 28, 2025",
        author: "Wabsyin Team",
        category: "Policy"
    },
    {
        id: 2,
        title: "Monocrystalline vs Polycrystalline Panels",
        excerpt: "Which type of solar panel is best for Assam's climate? We break down the pros and cons.",
        date: "Nov 25, 2025",
        author: "Tech Desk",
        category: "Technology"
    },
    {
        id: 3,
        title: "5 Myths About Solar Energy Debunked",
        excerpt: "Does solar work in the rain? Is it too expensive? We bust common myths.",
        date: "Nov 20, 2025",
        author: "Wabsyin Team",
        category: "Education"
    }
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Solar Insights</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Latest news, tips, and updates from the world of renewable energy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post) => (
                        <article key={post.id} className="flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-neutral-200 dark:bg-neutral-800 w-full" /> {/* Placeholder for image */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                                    <span className="px-2 py-1 bg-white dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 font-medium text-saffron">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white line-clamp-2">
                                    <Link href={`/blog/${post.id}`} className="hover:text-saffron transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                    <span className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                                        <User className="w-3 h-3" /> {post.author}
                                    </span>
                                    <Link href={`/blog/${post.id}`} className="text-sm font-bold text-neutral-900 dark:text-white hover:underline">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
