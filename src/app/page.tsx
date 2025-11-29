import Hero from '@/components/home/Hero'
import SubsidyCalculator from '@/components/calculator/SubsidyCalculator'
import TiltCard from '@/components/ui/TiltCard'
import Step from '@/components/home/Step'
import { Leaf, Wallet, Home, CheckCircle, ArrowRight, Sun } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden">
      <Hero />

      {/* 2. Impact Section: Why Solar? */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">Why Go Solar Now?</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">The sun is free. Your electricity bill isn't.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TiltCard className="h-80">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-india-green">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Eco-Friendly</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Reduce your carbon footprint by tons every year. It's like planting 100 trees.</p>
              </div>
            </TiltCard>
            <TiltCard className="h-80">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 text-saffron">
                  <Wallet className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Huge Savings</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Save up to 90% on electricity bills. The system pays for itself in 3-4 years.</p>
              </div>
            </TiltCard>
            <TiltCard className="h-80">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Home className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Property Value</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Homes with solar panels sell faster and for a premium price.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3. Calculator Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-white to-india-green/5 dark:from-neutral-900 dark:to-neutral-950 z-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-saffron font-bold tracking-wider uppercase text-sm">PM Surya Ghar Yojana</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-neutral-900 dark:text-white">Calculate Your Subsidy</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">See how much the government will pay for your solar system.</p>
          </div>
          <SubsidyCalculator />
        </div>
      </section>

      {/* 4. How It Works (Summary) */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Solar Made Simple</h2>
              <p className="text-neutral-400 text-lg mb-8">
                We handle everything from paperwork to installation. You just sit back and enjoy the savings.
              </p>
              <div className="space-y-8">
                <Step number="01" title="Free Site Survey" desc="Our engineers visit your home to design the perfect system." />
                <Step number="02" title="Subsidy Approval" desc="We apply for the PM Surya Ghar subsidy on your behalf." />
                <Step number="03" title="Installation" desc="Certified installation in 1-2 days with zero disruption." />
                <Step number="04" title="Net Metering" desc="Connect to the grid and start earning credits." />
              </div>
              <div className="mt-10">
                <Link href="/process" className="text-saffron font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  View Full Process <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 group">
              <img
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop"
                alt="Solar Installation Process"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                <p className="text-white font-bold">Professional Installation</p>
                <p className="text-white/70 text-sm">Certified Team • Safety First</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-16 text-neutral-900 dark:text-white">Trusted by Assam</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Wabsyin handled the entire subsidy process. I got ₹78,000 in my account within 30 days!"
              author="Rajesh Kumar"
              location="Guwahati"
            />
            <TestimonialCard
              quote="My electricity bill went from ₹4,500 to ₹150. Best investment for my home."
              author="Anjali Das"
              location="Tezpur"
            />
            <TestimonialCard
              quote="Professional team, neat installation, and great after-sales support. Highly recommended."
              author="Bikash Sharma"
              location="Jorhat"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-saffron to-orange-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Switch?</h2>
          <p className="text-xl mb-8 opacity-90">Get a free quote and site survey today.</p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  )
}





function TestimonialCard({ quote, author, location }: any) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 text-left">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map(i => <Sun key={i} className="w-4 h-4 text-saffron fill-current" />)}
      </div>
      <p className="text-neutral-600 dark:text-neutral-300 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold text-neutral-900 dark:text-white">{author}</p>
        <p className="text-sm text-neutral-500">{location}</p>
      </div>
    </div>
  )
}
