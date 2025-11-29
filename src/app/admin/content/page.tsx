'use client'

import { Plus, Edit, Trash2, Globe } from 'lucide-react'

const MOCK_PAGES = [
    { slug: 'home', title: 'Home Page', lang: 'en', lastUpdated: '2 hours ago' },
    { slug: 'about', title: 'About Us', lang: 'en', lastUpdated: '1 day ago' },
    { slug: 'services', title: 'Services', lang: 'en', lastUpdated: '3 days ago' },
    { slug: 'home', title: 'Home Page (Assamese)', lang: 'as', lastUpdated: '5 days ago' },
]

export default function ContentPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Content Management</h1>
                    <p className="text-neutral-500">Manage website pages and translations.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" /> Create Page
                </button>
            </div>

            <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 dark:bg-neutral-900 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                        <tr>
                            <th className="px-6 py-4 font-medium">Page Title</th>
                            <th className="px-6 py-4 font-medium">Slug</th>
                            <th className="px-6 py-4 font-medium">Language</th>
                            <th className="px-6 py-4 font-medium">Last Updated</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {MOCK_PAGES.map((page, idx) => (
                            <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white">{page.title}</td>
                                <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">/{page.slug}</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-2 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium w-fit">
                                        <Globe className="w-3 h-3" /> {page.lang.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{page.lastUpdated}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-blue-600 transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-red-600 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
