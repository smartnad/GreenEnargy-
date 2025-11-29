import Link from 'next/link'
import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 pt-20 pb-10 border-t border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="p-2 bg-saffron rounded-lg text-white">
                                <Sun className="w-5 h-5 fill-current" />
                            </div>
                            <span className="text-xl font-bold text-neutral-900 dark:text-white">Wabsyin</span>
                        </Link>
                        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            Empowering India with sustainable rooftop solar solutions. Join the green revolution today.
                        </p>
                        <div className="flex gap-4 text-neutral-400">
                            <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
                            <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                            <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
                            <li><Link href="/about" className="hover:text-saffron transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-saffron transition-colors">Our Projects</Link></li>
                            <li><Link href="/partners" className="hover:text-saffron transition-colors">Become a Partner</Link></li>
                            <li><Link href="/blog" className="hover:text-saffron transition-colors">Solar Insights</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-6">Services</h4>
                        <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
                            <li><Link href="/services" className="hover:text-saffron transition-colors">Residential Solar</Link></li>
                            <li><Link href="/services" className="hover:text-saffron transition-colors">Commercial Solar</Link></li>
                            <li><Link href="/services" className="hover:text-saffron transition-colors">Subsidy Assistance</Link></li>
                            <li><Link href="/services" className="hover:text-saffron transition-colors">Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-saffron shrink-0" />
                                <span>GS Road, Guwahati, Assam - 781005</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-saffron shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-saffron shrink-0" />
                                <span>hello@wabsyin.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <p>© 2025 Wabsyin Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/legal/privacy" className="hover:text-neutral-900 dark:hover:text-white">Privacy Policy</Link>
                        <Link href="/legal/terms" className="hover:text-neutral-900 dark:hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="hover:text-saffron transition-colors">
            {icon}
        </a>
    )
}
