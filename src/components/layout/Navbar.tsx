'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'How It Works' },
    { href: '/projects', label: 'Projects' },
    { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-gradient-to-br from-saffron to-orange-600 rounded-lg text-white shadow-lg group-hover:shadow-saffron/20 transition-all">
                        <Sun className="w-6 h-6 fill-current" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                        Wabsyin
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-saffron dark:hover:text-saffron transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800" />

                    <LanguageSwitcher />

                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-neutral-900/10"
                    >
                        Get Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-neutral-600 dark:text-neutral-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-neutral-900 dark:text-white py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="py-2 border-b border-neutral-100 dark:border-neutral-800">
                                <LanguageSwitcher />
                            </div>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full py-3 bg-saffron text-white rounded-xl text-center font-bold"
                            >
                                Get Free Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
