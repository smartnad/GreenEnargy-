'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQS = [
    {
        q: "What is the PM Surya Ghar Muft Bijli Yojana?",
        a: "It is a government scheme that provides subsidies for rooftop solar installations. You can get up to ₹78,000 subsidy for systems up to 3kW capacity."
    },
    {
        q: "How much roof area do I need?",
        a: "Typically, 1kW of solar panels requires about 100 sq. ft. of shadow-free roof area. So for a 3kW system, you need roughly 300 sq. ft."
    },
    {
        q: "What happens when it rains or is cloudy?",
        a: "Solar panels still generate electricity on cloudy days, though efficiency may drop to 10-25%. On-grid systems will automatically draw power from the grid if solar generation is insufficient."
    },
    {
        q: "What is the warranty on the system?",
        a: "Solar panels typically come with a 25-year performance warranty. Inverters usually have a 5-10 year warranty, and we provide a 5-year workmanship warranty on installation."
    },
    {
        q: "Can I run ACs on solar?",
        a: "Yes! A 3-5kW system can easily run air conditioners during the day. For night usage, you would need net metering (to use credits) or a battery storage system."
    }
]

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Frequently Asked Questions</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Everything you need to know about going solar.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </main>
    )
}

function FAQItem({ question, answer }: any) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-900/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
                <span className="font-bold text-lg text-neutral-900 dark:text-white">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-neutral-500" /> : <ChevronDown className="w-5 h-5 text-neutral-500" />}
            </button>
            {isOpen && (
                <div className="p-6 pt-0 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    {answer}
                </div>
            )}
        </div>
    )
}
