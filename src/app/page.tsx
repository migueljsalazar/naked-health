import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Activity, ShieldCheck, Scale, FlaskConical, Leaf } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-12">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-6 lg:px-12 py-4 flex justify-between items-center bg-brand-50/90 dark:bg-stone-850/90 border-b border-brand-200/50 dark:border-brand-900/50 transition-all duration-300">
        <div className="text-xl font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase">
          Naked Health
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
          <Link href="/products" className="hover:text-brand-600 transition-colors">Products</Link>
          <Link href="/plans" className="hover:text-brand-600 transition-colors">Plans</Link>
          <Link href="/science" className="hover:text-brand-600 transition-colors">Science</Link>
          <Link href="/chat" className="hover:text-brand-600 transition-colors">AI Care Team</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-brand-600 transition-colors">
            Sign In
          </Link>
          <Link
            href="/quiz"
            className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm flex items-center gap-2 dark:bg-brand-100 dark:text-brand-950 dark:hover:bg-brand-200"
          >
            Check Eligibility <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 relative z-10 min-h-[90vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-brand-50/10 to-brand-50/0 dark:from-brand-900/20 dark:via-stone-850/10 dark:to-stone-850/0 -z-10 pointer-events-none" />

        <div className="w-full md:w-1/2 space-y-8 mt-32 md:mt-0 pt-10 md:pt-0 pr-0 md:pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 text-brand-800 text-xs font-semibold uppercase tracking-widest dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
            Medical Weight Loss
          </div>

          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-brand-950 dark:text-brand-50 leading-[1.1]">
            Weight loss is biology, <span className="italic font-normal text-brand-600 dark:text-brand-400">not willpower.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-xl font-light leading-relaxed">
            Access GLP-1 medications and personalized metabolic care prescribed by real doctors, guided 24/7 by Lotus — our AI medical intelligence.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/quiz"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg flex justify-center items-center gap-2 dark:bg-brand-100 dark:text-brand-950 dark:hover:bg-brand-200 hover:scale-[1.02] active:scale-95 duration-200"
            >
              Take the Quiz <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/plans" className="text-sm text-brand-700 dark:text-brand-400 hover:underline font-medium">
              View Plans & Pricing →
            </Link>
          </div>
        </div>

        {/* Hero Imagery */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative h-[50vh] md:h-[80vh] flex justify-end items-center">
          <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-3/4 md:w-[85%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10 border border-brand-200/30 dark:border-white/10">
            <Image src="/images/lifestyle.png" alt="Wellness lifestyle" fill className="object-cover object-center" priority />
          </div>
          <div className="absolute left-0 md:left-[-10%] bottom-10 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white dark:border-stone-850">
            <Image src="/images/product.png" alt="Premium product" fill className="object-cover object-center" priority />
          </div>
        </div>
      </main>

      {/* Trust Section */}
      <div className="bg-brand-950 text-brand-50 dark:bg-black py-20 px-6 mt-12 md:mt-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight mb-4">
              A modern protocol for <span className="text-brand-400 italic font-normal">metabolic health</span>.
            </h2>
            <p className="text-brand-200/70 font-light leading-relaxed">
              We strip away the friction of traditional healthcare. No waiting rooms, no judgment. Just clinical efficacy backed by science and our Lotus AI Medical Guide.
            </p>
            <Link href="/science" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium mt-6 transition-colors">
              Read the Science <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full border-t border-brand-800 lg:border-t-0 lg:border-l lg:pl-16 pt-8 lg:pt-0">
            <div className="flex flex-col space-y-4">
              <Scale className="w-8 h-8 text-brand-400" />
              <h3 className="text-lg font-medium">15% Average Loss</h3>
              <p className="text-sm text-brand-200/70 font-light">Patients see significant reduction in body weight within 6 months on GLP-1s.</p>
            </div>
            <div className="flex flex-col space-y-4">
              <ShieldCheck className="w-8 h-8 text-brand-400" />
              <h3 className="text-lg font-medium">FDA Approved</h3>
              <p className="text-sm text-brand-200/70 font-light">Medications rigorously tested for safety and metabolic efficacy.</p>
            </div>
            <div className="flex flex-col space-y-4">
              <Activity className="w-8 h-8 text-brand-400" />
              <h3 className="text-lg font-medium">24/7 AI Guidance</h3>
              <p className="text-sm text-brand-200/70 font-light">Lotus AI for dosage protocols, side-effect management, and diet optimization.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="medication" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 text-brand-800 text-xs font-semibold uppercase tracking-widest mb-4 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
              Clinical Protocols
            </div>
            <h2 className="text-4xl font-light tracking-tight text-brand-950 dark:text-brand-50">
              Our treatments
            </h2>
          </div>
          <Link href="/products" className="text-sm text-brand-600 hover:underline font-medium whitespace-nowrap">
            View all products →
          </Link>
        </div>

        {/* Weight Loss Products */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-medium text-brand-800 dark:text-brand-300">Weight Loss</h3>
            <span className="h-px flex-1 bg-brand-200 dark:bg-brand-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRODUCTS.filter(p => p.category === 'weight-loss').map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden bg-brand-100/40 dark:bg-brand-950/20">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-900 text-brand-50 text-xs font-semibold px-2.5 py-1 rounded-full">{product.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-sm font-medium text-brand-950 dark:text-brand-50 mb-1">{product.name}</div>
                  <div className="text-xs text-stone-500 mb-3 font-light">{product.tagline}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-light text-brand-950 dark:text-brand-100">From ${product.startingPrice}<span className="text-xs text-stone-400">/mo</span></span>
                    <ArrowRight className="w-4 h-4 text-brand-400 group-hover:text-brand-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Longevity Peptides */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-4 h-4 text-brand-600" />
            <h3 className="text-lg font-medium text-brand-800 dark:text-brand-300">Longevity Peptides</h3>
            <span className="h-px flex-1 bg-brand-200 dark:bg-brand-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRODUCTS.filter(p => p.category === 'longevity').map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex"
              >
                <div className="relative w-36 flex-shrink-0 overflow-hidden bg-brand-100/40 dark:bg-brand-950/20">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-600 text-brand-50 text-xs font-semibold px-2.5 py-1 rounded-full">{product.badge}</span>
                  )}
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-widest mb-1">Longevity</div>
                    <div className="text-sm font-medium text-brand-950 dark:text-brand-50 mb-1">{product.name}</div>
                    <div className="text-xs text-stone-500 font-light">{product.tagline}</div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-light text-brand-950 dark:text-brand-100">From ${product.startingPrice}<span className="text-xs text-stone-400">/mo</span></span>
                    <ArrowRight className="w-4 h-4 text-brand-400 group-hover:text-brand-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section Preview */}
      <section id="science" className="bg-brand-100/50 dark:bg-brand-950/20 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FlaskConical className="w-10 h-10 text-brand-600 mx-auto mb-6" />
          <h2 className="text-4xl font-light tracking-tight text-brand-950 dark:text-brand-50 mb-4">
            Grounded in peer-reviewed research
          </h2>
          <p className="text-lg text-stone-500 dark:text-stone-400 font-light max-w-2xl mx-auto mb-8">
            From the STEP-1 and SURMOUNT-1 trials to longevity peptide science — our protocols have the evidence to back them.
          </p>
          <Link href="/science" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-brand-300 dark:border-brand-700 text-brand-900 dark:text-brand-100 font-medium hover:bg-brand-200 dark:hover:bg-brand-900/30 transition-all">
            Explore the Science <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lotus AI Banner */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto bg-brand-950 dark:bg-black rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-700 bg-brand-900/50 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-4">
              AI Medical Guide
            </div>
            <h2 className="text-4xl font-light text-brand-50 mb-4">Meet Lotus,<br /><span className="italic text-brand-400">your AI care team.</span></h2>
            <p className="text-brand-200/70 font-light leading-relaxed max-w-xl">
              Lotus is trained on clinical weight loss literature, metabolic medicine, and longevity science. Ask anything — dosing schedules, side effects, what to expect, or personalized protocol optimization.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Link
              href="/chat"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-brand-400 text-brand-950 font-medium hover:bg-brand-300 transition-all shadow-xl hover:scale-105 active:scale-95 duration-200 text-lg"
            >
              Chat with Lotus <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-200 dark:border-brand-900/40 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-base font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase mb-2">Naked Health</div>
            <p className="text-xs text-stone-400 font-light max-w-xs">Modern, progressive telehealth for weight loss and longevity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {[
              { label: 'Products', links: [{ text: 'Semaglutide', href: '/products/semaglutide' }, { text: 'Tirzepatide', href: '/products/tirzepatide' }, { text: 'Oral Kit', href: '/products/oral-kit' }, { text: 'Peptides', href: '/products/bpc157' }] },
              { label: 'Company', links: [{ text: 'Plans', href: '/plans' }, { text: 'Science', href: '/science' }, { text: 'AI Care Team', href: '/chat' }] },
              { label: 'Account', links: [{ text: 'Sign In', href: '/sign-in' }, { text: 'Sign Up', href: '/sign-up' }, { text: 'Take Quiz', href: '/quiz' }] },
              { label: 'Legal', links: [{ text: 'Privacy Policy', href: '#' }, { text: 'Terms of Service', href: '#' }, { text: 'Medical Disclaimer', href: '#' }] },
            ].map((col) => (
              <div key={col.label}>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-800 dark:text-brand-300 mb-3">{col.label}</div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link href={link.href} className="text-stone-500 hover:text-brand-600 transition-colors text-xs">{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-brand-200/50 dark:border-brand-900/30 max-w-7xl mx-auto text-xs text-stone-400 font-light">
          © 2025 Naked Health. All rights reserved. Compounded medications are not FDA-approved. A prescription is required. Information is for educational purposes only.
        </div>
      </footer>
    </div>
  );
}
