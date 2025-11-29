import TiltCard from '@/components/ui/TiltCard'
import { Sun, Battery, Wrench, FileText, IndianRupee, BarChart3, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
    {
        icon: <Sun className="w-10 h-10 text-saffron" />,
        title: "Rooftop Solar",
        desc: "Turn your idle roof into a power plant. Customized on-grid systems for homes that reduce electricity bills by up to 90%."
    },
    {
        icon: <Battery className="w-10 h-10 text-blue-500" />,
        title: "Hybrid Systems",
        desc: "Power cuts? No problem. Hybrid systems with battery storage ensure you have 24/7 power backup even when the grid is down."
    },
    {
        icon: <Building2 className="w-10 h-10 text-purple-500" />,
        title: "Commercial Solutions",
        desc: "Scale up your savings. High-efficiency solar plants for factories, offices, and schools with accelerated depreciation benefits."
    },
    {
        icon: <FileText className="w-10 h-10 text-india-green" />,
        title: "Subsidy Assistance",
        desc: "We handle the entire PM Surya Ghar subsidy paperwork for you. From application to disbursement, we've got it covered."
    },
    {
        icon: <Wrench className="w-10 h-10 text-orange-500" />,
        title: "Maintenance (AMC)",
        desc: "Keep your system running at peak efficiency. Our AMC packages include regular cleaning, health checks, and priority support."
    },
    {
        icon: <IndianRupee className="w-10 h-10 text-teal-500" />,
        title: "Financing Options",
        desc: "Zero down payment options available. We partner with leading banks to offer easy EMI schemes for your solar installation."
    },
    {
        icon: <BarChart3 className="w-10 h-10 text-indigo-500" />,
        title: "Energy Audits",
        desc: "Optimize your consumption before you generate. Our experts analyze your usage patterns to recommend the right system size."
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Our Services</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Comprehensive solar solutions tailored to your needs. From consultation to maintenance, we are with you every step of the way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <TiltCard key={idx} className="h-full min-h-[320px]">
                            <div className="p-8 flex flex-col h-full text-left">
                                <div className="mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl w-fit">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">{service.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-1 leading-relaxed">
                                    {service.desc}
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-saffron font-bold hover:gap-4 transition-all"
                                >
                                    Request Quote <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <div className="mt-20 bg-neutral-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what you need?</h2>
                        <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                            Our solar experts are here to help. Schedule a free consultation and site survey today.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-neutral-900 rounded-full font-bold hover:scale-105 transition-transform inline-block"
                        >
                            Talk to an Expert
                        </Link>
                    </div>

                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-saffron blur-[100px]" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-india-green blur-[100px]" />
                    </div>
                </div>
            </div>
        </main>
    )
}
