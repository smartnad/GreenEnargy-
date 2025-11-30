'use client'

import Image from 'next/image'
import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
                        alt="Solar Roof Background"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-transparent" />
                </div>

                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-saffron/20 text-saffron font-bold tracking-wider uppercase text-xs mb-6 border border-saffron/20">Our Mission</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Empowering India's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-india-green">Solar Future</span>
                        </h1>
                        <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                            Wabsyin is on a mission to make clean energy accessible, affordable, and hassle-free for every Indian household. We are building the infrastructure for a sustainable tomorrow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 md:py-24 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=2000&auto=format&fit=crop"
                            alt="Wabsyin Team Installation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Lighter Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-2xl mb-1">Established 2024</p>
                            <p className="text-neutral-200">Guwahati, Assam</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-white">From a Rooftop to a Revolution</h2>
                        <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            <p>
                                Founded in 2024, Wabsyin started with a simple observation: installing solar was too complicated. The paperwork, the technical jargon, and the hidden costs scared people away.
                            </p>
                            <p>
                                We decided to change that. By combining cutting-edge technology with a human-centric approach, we've simplified the solar journey. Today, we are one of Assam's fastest-growing solar companies, trusted by hundreds of families.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-12">
                            <Stat number="500+" label="Installations" />
                            <Stat number="2MW+" label="Power Generated" />
                            <Stat number="100%" label="Happy Clients" />
                            <Stat number="24/7" label="Support" />
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <Badge text="MNRE Certified" />
                            <Badge text="ISO 9001:2015" />
                            <Badge text="BIS Approved" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-black text-white">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
                        <p className="text-neutral-400 text-lg">The principles that guide every installation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <ValueContent
                            icon={<Award className="w-8 h-8 text-orange-500" />}
                            title="Excellence"
                            desc="We don't cut corners. Only Tier-1 panels and top-rated inverters."
                        />
                        <ValueContent
                            icon={<Users className="w-8 h-8 text-green-600" />}
                            title="Customer First"
                            desc="Your peace of mind is our priority. We handle all the paperwork."
                        />
                        <ValueContent
                            icon={<Target className="w-8 h-8 text-blue-600" />}
                            title="Transparency"
                            desc="No hidden costs. What you see in the quote is what you pay."
                        />
                        <ValueContent
                            icon={<Heart className="w-8 h-8 text-red-500" />}
                            title="Sustainability"
                            desc="We are committed to a greener, cleaner planet for future generations."
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

function Stat({ number, label }: any) {
    return (
        <div>
            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">{number}</div>
            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">{label}</div>
        </div>
    )
}

function Badge({ text }: any) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-bold text-neutral-700 dark:text-neutral-300 shadow-sm">
            <CheckCircle className="w-4 h-4 text-india-green" />
            {text}
        </div>
    )
}

function ValueContent({ icon, title, desc }: any) {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-neutral-900 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-neutral-800">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">{desc}</p>
        </div>
    )
}
