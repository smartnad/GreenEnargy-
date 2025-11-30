'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Zap, Calendar, ArrowUpRight, Filter, Battery, Leaf } from 'lucide-react'

// Enhanced Project Data
const PROJECTS = [
    {
        id: 1,
        title: "Residential Villa Installation",
        location: "Guwahati, Assam",
        size: "5 kW",
        date: "Oct 2025",
        image: "https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=2071&auto=format&fit=crop",
        savings: "₹45,000 / year",
        category: "Residential",
        description: "A complete rooftop solution for a modern villa, ensuring 24/7 power backup and significant cost reduction."
    },
    {
        id: 2,
        title: "Commercial Complex Rooftop",
        location: "Tezpur, Assam",
        size: "25 kW",
        date: "Sep 2025",
        image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
        savings: "₹2.5 Lakhs / year",
        category: "Commercial",
        description: "Large-scale installation for a shopping complex, powering common areas and reducing grid dependency."
    },
    {
        id: 3,
        title: "Hybrid System for Farmhouse",
        location: "Jorhat, Assam",
        size: "8 kW",
        date: "Aug 2025",
        image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1974&auto=format&fit=crop",
        savings: "₹72,000 / year",
        category: "Hybrid",
        description: "A hybrid setup ensuring power availability even during long grid outages in remote areas."
    },
    {
        id: 4,
        title: "Apartment Society Grid-Tie",
        location: "Silchar, Assam",
        size: "50 kW",
        date: "July 2025",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
        savings: "₹5.0 Lakhs / year",
        category: "Residential",
        description: "Community solar project reducing maintenance costs for over 100 families."
    },
    {
        id: 5,
        title: "School Solar Project",
        location: "Nagaon, Assam",
        size: "15 kW",
        date: "June 2025",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
        savings: "₹1.5 Lakhs / year",
        category: "Commercial",
        description: "Educational institution going green, serving as a live learning model for students."
    },
    {
        id: 6,
        title: "Off-Grid Cabin System",
        location: "Kaziranga, Assam",
        size: "3 kW",
        date: "May 2025",
        image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1974&auto=format&fit=crop",
        savings: "100% Energy Independence",
        category: "Off-Grid",
        description: "Completely self-sufficient power system for a remote eco-tourism cabin."
    }
]

const FILTERS = ['All', 'Residential', 'Commercial', 'Hybrid', 'Off-Grid']

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
}

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter)

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-saffron/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-india-green/5 to-transparent pointer-events-none" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-saffron/10 text-saffron text-xs font-bold rounded-full border border-saffron/20 uppercase tracking-wider">
                                Our Portfolio
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white leading-tight">
                            Powering the Future, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-600">
                                One Roof at a Time.
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                            Explore our diverse portfolio of solar installations across Assam. From residential rooftops to large-scale commercial projects, we deliver excellence in every watt.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-10 px-6 sticky top-0 z-40 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                        <Filter className="w-5 h-5" />
                        <span className="font-medium">Filter Projects:</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-neutral-900 text-white shadow-lg scale-105 dark:bg-white dark:text-neutral-900'
                                    : 'bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    variants={itemVariants as any}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group"
                                >
                                    <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 h-full flex flex-col">
                                        {/* Image Container */}
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md text-neutral-900 dark:text-white text-xs font-bold rounded-full shadow-sm">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 right-4">
                                                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-saffron hover:text-white">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                                                    <MapPin className="w-3 h-3" />
                                                    {project.location}
                                                </div>
                                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-saffron transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 grid grid-cols-2 gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                        <Zap className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-neutral-400">Capacity</p>
                                                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{project.size}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                                        <Leaf className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-neutral-400">Savings</p>
                                                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{project.savings}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
