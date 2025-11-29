import { Handshake, TrendingUp, ShieldCheck, Users } from 'lucide-react'

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Partner with Wabsyin</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Join our network of certified installers and sales partners. Let's grow together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <BenefitCard
                        icon={<TrendingUp className="text-saffron" />}
                        title="High Growth"
                        desc="Tap into the booming solar market with our qualified leads and marketing support."
                    />
                    <BenefitCard
                        icon={<ShieldCheck className="text-india-green" />}
                        title="Trusted Brand"
                        desc="Leverage the Wabsyin reputation for quality and reliability to close more deals."
                    />
                    <BenefitCard
                        icon={<Handshake className="text-blue-500" />}
                        title="Fair Margins"
                        desc="Competitive commission structures and timely payments for all our partners."
                    />
                    <BenefitCard
                        icon={<Users className="text-purple-500" />}
                        title="Training & Support"
                        desc="Regular technical training and dedicated support managers to help you succeed."
                    />
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Ready to join us?</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
                        Fill out the form below and our partnership team will get back to you within 24 hours.
                    </p>
                    <form className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-neutral-600 dark:text-neutral-400">Company Name</label>
                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-neutral-600 dark:text-neutral-400">Contact Person</label>
                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-neutral-600 dark:text-neutral-400">Email</label>
                            <input type="email" className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950" />
                        </div>
                        <button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg mt-4">
                            Apply Now
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

function BenefitCard({ icon, title, desc }: any) {
    return (
        <div className="flex gap-4 p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
            <div className="shrink-0 w-12 h-12 bg-neutral-50 dark:bg-neutral-900 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white">{title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
