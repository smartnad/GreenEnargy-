'use client'

import { useState } from 'react'
import Image from 'next/image'
import TiltCard from '@/components/ui/TiltCard'
import { MapPin, Zap, Calendar, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PROJECTS = [
    {
        id: 1,
        title: "Residential Villa Installation",
        location: "Guwahati, Assam",
        size: "5 kW",
        date: "Oct 2025",
        image: "https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=2071&auto=format&fit=crop",
        savings: "₹45,000 / year",
        category: "Residential"
    },
    {
        id: 2,
        title: "Commercial Complex Rooftop",
        location: "Tezpur, Assam",
        size: "25 kW",
        date: "Sep 2025",
        image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
        savings: "₹2.5 Lakhs / year",
        category: "Commercial"
    },
    {
        id: 3,
        title: "Hybrid System for Farmhouse",
        location: "Jorhat, Assam",
        size: "8 kW",
        date: "Aug 2025",
        image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1974&auto=format&fit=crop",
        savings: "₹72,000 / year",
        category: "Hybrid"
    },
    {
        id: 4,
        title: "Apartment Society Grid-Tie",
        location: "Silchar, Assam",
        size: "50 kW",
        date: "July 2025",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
        savings: "₹5.0 Lakhs / year",
        category: "Residential"
    },
    {
        id: 5,
        title: "School Solar Project",
        location: "Nagaon, Assam",
        size: "15 kW",
        date: "June 2025",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?w=800&q=80",
        savings: "₹1.5 Lakhs / year",
        category: "Commercial"
    },
    {
        id: 6,
        title: "Off-Grid Cabin System",
        location: "Kaziranga, Assam",
        size: "3 kW",
        date: "May 2025",
        image: "https://images.unsplash.com/photo-1548613053-220e75370368?w=800&q=80",
        savings: "100% Energy Independence",
        category: "Off-Grid"
    }
]

const FILTERS = ['All', 'Residential', 'Commercial', 'Hybrid', 'Off-Grid']

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter)

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Our Projects</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        From cozy homes to large factories, we've powered them all. Explore our latest installations across Assam.
                    </p>
                </div>

                {/* Functional Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeFilter === filter
                                    ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white shadow-lg scale-105'
                                    : 'bg-transparent text-neutral-600 border-neutral-200 hover:border-neutral-400 dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TiltCard className="h-full">
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-64 w-full overflow-hidden rounded-t-xl group">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
                                                    {project.category}
                                                </span>
                                                <span className="text-white font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-sm">
                                                    View Details <ArrowUpRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 line-clamp-1">{project.title}</h3>
                                                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                                                        <MapPin className="w-3 h-3" /> {project.location}
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 bg-saffron/10 text-saffron text-xs font-bold rounded-full border border-saffron/20 whitespace-nowrap">
                                                    {project.size}
                                                </span>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-xs text-neutral-400 mb-1 flex items-center gap-1"><Zap className="w-3 h-3" /> Savings</p>
                                                    <p className="text-sm font-bold text-india-green">{project.savings}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-neutral-400 mb-1 flex items-center justify-end gap-1"><Calendar className="w-3 h-3" /> Installed</p>
                                                    <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300">{project.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    )
}
