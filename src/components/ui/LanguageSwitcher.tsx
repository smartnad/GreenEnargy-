'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'as', label: 'অসমীয়া' }, // Assamese
    { code: 'hi', label: 'Hinglish' },
]

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState('en')
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        // Check cookie or local storage
        const savedLang = document.cookie.split('; ').find(row => row.startsWith('NEXT_LOCALE='))?.split('=')[1]
        if (savedLang) setCurrentLang(savedLang)
    }, [])

    const handleLanguageChange = (code: string) => {
        setCurrentLang(code)
        document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000` // 1 year
        setIsOpen(false)
        window.location.reload() // Simple reload to apply changes for now
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
                <Globe className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 uppercase">{currentLang}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-neutral-950 rounded-xl shadow-xl border border-neutral-100 dark:border-neutral-800 py-2 overflow-hidden z-50">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors ${currentLang === lang.code ? 'text-saffron font-bold' : 'text-neutral-600 dark:text-neutral-400'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
