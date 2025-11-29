'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => setSubmitted(true), 1000)
    }

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Get in Touch</h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10">
                            Ready to switch to solar? Have questions about subsidies? We're here to help.
                        </p>

                        <div className="space-y-8">
                            <ContactCard
                                icon={<Phone className="w-6 h-6" />}
                                title="Call Us"
                                value="+91 93650 86541"
                                href="tel:+919365086541"
                            />
                            <ContactCard
                                icon={<MessageCircle className="w-6 h-6" />}
                                title="WhatsApp Us"
                                value="Chat on WhatsApp"
                                href="https://wa.me/919365086541?text=Hi%20Wabsyin,%20I'm%20interested%20in%20solar%20installation."
                                highlight
                            />
                            <ContactCard
                                icon={<Mail className="w-6 h-6" />}
                                title="Email Us"
                                value="wabsyin@gmail.com"
                                href="mailto:wabsyin@gmail.com"
                            />
                            <ContactCard
                                icon={<MapPin className="w-6 h-6" />}
                                title="Visit Us"
                                value="Guwahati, Assam - 781005"
                                href="#"
                            />
                        </div>

                        <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Operating Hours</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                            <p className="text-neutral-600 dark:text-neutral-400">Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white dark:bg-neutral-900 p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-800">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-india-green rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Application Received!</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                                    Thank you for your interest. Our solar expert will call you within 24 hours to schedule a site visit.
                                </p>
                                <button className="text-saffron font-bold hover:underline">
                                    Track Application Status
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Request a Free Quote</h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input label="Full Name" placeholder="John Doe" required />
                                    <Input label="Phone Number" placeholder="+91 98765 43210" required type="tel" />
                                </div>

                                <Input label="Email Address" placeholder="john@example.com" type="email" />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input label="City / District" placeholder="Guwahati" required />
                                    <Input label="Avg. Monthly Bill (₹)" placeholder="2500" type="number" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Message (Optional)</label>
                                    <textarea
                                        className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-saffron transition-all min-h-[120px]"
                                        placeholder="Tell us about your roof type or specific requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                >
                                    Submit Enquiry <Send className="w-4 h-4" />
                                </button>

                                <p className="text-xs text-center text-neutral-400">
                                    By submitting, you agree to our Privacy Policy. We respect your data.
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </main>
    )
}

function ContactCard({ icon, title, value, href, highlight }: any) {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={cn(
                "flex items-center gap-6 p-6 rounded-2xl border transition-all hover:scale-105",
                highlight
                    ? "bg-saffron/5 border-saffron/20 hover:border-saffron/50"
                    : "bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
            )}
        >
            <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                highlight ? "bg-saffron text-white" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            )}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{title}</p>
                <p className={cn("text-lg font-bold", highlight ? "text-saffron" : "text-neutral-900 dark:text-white")}>
                    {value}
                </p>
            </div>
        </a>
    )
}

function Input({ label, ...props }: any) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">
                {label} {props.required && <span className="text-red-500">*</span>}
            </label>
            <input
                className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-saffron transition-all"
                {...props}
            />
        </div>
    )
}

// Helper for cn
import { cn } from '@/lib/utils'
