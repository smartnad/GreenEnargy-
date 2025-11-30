'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sun, Zap, ShieldCheck } from 'lucide-react'
import Hero3D from './Hero3D'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-neutral-950 pt-20">
            {/* 3D Background */}
            <Hero3D />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white dark:from-neutral-950/80 dark:via-neutral-950/50 dark:to-neutral-950 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20 text-saffron font-bold text-sm mb-6">
                            <Sun className="w-4 h-4 animate-spin-slow" />
                            <span>PM Surya Ghar Muft Bijli Yojana Ready</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-neutral-900 dark:text-white">
                            Power Your Home with <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-saffron via-white to-india-green drop-shadow-sm">
                                India's Sunshine
                            </span>
                        </h1>

                        <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Stop paying rising electricity bills. Switch to solar with Wabsyin and get up to <span className="font-bold text-india-green">₹78,000 subsidy</span> directly in your bank account.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-saffron to-orange-600 text-white rounded-full font-bold text-lg shadow-lg shadow-saffron/30 hover:shadow-saffron/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
                            >
                                Get Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/projects"
                                className="px-8 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full font-bold text-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
                            >
                                View Projects
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-india-green" />
                                <span>25 Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-saffron" />
                                <span>Zero Bills</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex items-center justify-center mt-12 lg:mt-0"
                    >
                        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] shrink-0 aspect-square">

                            {/* Outer Orbiting Ring */}
                            <div className="absolute inset-[-20px] rounded-full border border-neutral-200 dark:border-neutral-800 animate-spin-slow-reverse opacity-60" />

                            {/* Inner Glowing Ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-saffron/30 animate-spin-slow" />

                            {/* Main Image Container with Glass Effect Border */}
                            <div className="absolute inset-4 rounded-full p-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl z-10">
                                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                                        alt="Modern Solar Home"
                                        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-saffron/10 pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating Badge 1: Savings */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[15%] -left-[5%] z-20 bg-white dark:bg-neutral-900 p-3 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 flex items-center gap-3"
                            >
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                                    <Zap className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Monthly Savings</p>
                                    <p className="text-sm font-bold text-neutral-900 dark:text-white">₹4,500+</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2: Eco Friendly */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[20%] -right-[5%] z-20 bg-white dark:bg-neutral-900 p-3 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 flex items-center gap-3"
                            >
                                <div className="p-2 bg-saffron/10 rounded-full text-saffron">
                                    <Sun className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Clean Energy</p>
                                    <p className="text-sm font-bold text-neutral-900 dark:text-white">100% Green</p>
                                </div>
                            </motion.div>

                            {/* Background Glow */}
                            <div className="absolute inset-10 bg-saffron/40 blur-[120px] rounded-full z-0 animate-pulse-slow pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
