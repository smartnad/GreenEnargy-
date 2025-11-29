import { ClipboardCheck, FileText, Settings, Sun, CheckCircle } from 'lucide-react'

export default function ProcessPage() {
    const steps = [
        {
            icon: <ClipboardCheck className="w-8 h-8 text-saffron" />,
            title: "1. Free Consultation",
            desc: "We analyze your roof, electricity bill, and energy needs to design the perfect system for you."
        },
        {
            icon: <FileText className="w-8 h-8 text-blue-500" />,
            title: "2. Quote & Subsidy Check",
            desc: "Get a detailed proposal including cost, savings, and your eligible subsidy amount under PM Surya Ghar Yojana."
        },
        {
            icon: <Settings className="w-8 h-8 text-purple-500" />,
            title: "3. Installation",
            desc: "Our certified technicians install your system in 1-2 days with minimal disruption to your home."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-india-green" />,
            title: "4. Inspection & Net Metering",
            desc: "We coordinate with the DISCOM for inspection and net meter installation to connect you to the grid."
        },
        {
            icon: <Sun className="w-8 h-8 text-orange-500" />,
            title: "5. Power On!",
            desc: "Start generating your own clean energy and watch your electricity bills drop to zero."
        }
    ]

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">How It Works</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Your journey to solar energy is simpler than you think. We handle everything from start to finish.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 w-full">
                                    <div className={`bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{step.title}</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-neutral-950 border-4 border-neutral-100 dark:border-neutral-800 shadow-sm shrink-0">
                                    {step.icon}
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                        Start Your Journey Today
                    </button>
                </div>
            </div>
        </main>
    )
}
