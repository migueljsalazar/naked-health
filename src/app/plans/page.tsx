import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const PLANS = [
    {
        name: 'Starter',
        price: 69,
        per: 'mo',
        description: 'The injection-free entry point to medical weight loss.',
        badge: null,
        href: '/checkout/oral-kit',
        includes: [
            'Personalized oral medication kit',
            'Unlimited Lotus AI guidance',
            'Monthly provider check-in',
            'Nutrition & sleep coaching',
            'FSA / HSA eligible',
        ],
        cta: 'Start with Oral Kit',
    },
    {
        name: 'Metabolic',
        price: 199,
        per: 'mo',
        description: 'The full GLP-1 protocol with clinical oversight.',
        badge: 'Most Popular',
        href: '/checkout/semaglutide',
        includes: [
            'Compounded semaglutide injection',
            'Unlimited Lotus AI guidance',
            'Unlimited provider consultations',
            'Bi-monthly progress tracking',
            'Priority pharmacist access',
            'Nutrition & lifestyle coaching',
        ],
        cta: 'Start with GLP-1',
    },
    {
        name: 'Elite',
        price: 349,
        per: 'mo',
        description: 'Maximum results. Total metabolic reinvention.',
        badge: 'Best Results',
        href: '/checkout/tirzepatide',
        includes: [
            'Tirzepatide injection (dual GLP-1/GIP)',
            'NAD+ Longevity Peptide Stack',
            'Unlimited Lotus AI — 24/7',
            'Dedicated care coordinator',
            'Quarterly comprehensive labs',
            'Priority shipping & refills',
            'Concierge IV infusion access',
        ],
        cta: 'Go Elite',
    },
];

const REVIEWS = [
    { name: 'Jenna M.', text: 'I lost 28 pounds in 5 months on the Metabolic plan. Lotus AI answered every question I had at midnight without judgment.', stars: 5 },
    { name: 'Carlos R.', text: 'The Tirzepatide Elite plan is life-changing. Down 40 lbs and my labs are the best they\'ve ever been.', stars: 5 },
    { name: 'Sarah K.', text: 'Started with the Starter oral kit because I was nervous about injections. Lost 15 lbs in 3 months.', stars: 5 },
];

export default function PlansPage() {
    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 glass px-6 lg:px-12 py-4 flex justify-between items-center bg-brand-50/90 dark:bg-stone-850/90 border-b border-brand-200/50 dark:border-brand-900/50">
                <Link href="/" className="text-xl font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase">Naked Health</Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
                    <Link href="/products" className="hover:text-brand-600 transition-colors">Products</Link>
                    <Link href="/plans" className="text-brand-600 font-semibold">Plans</Link>
                    <Link href="/science" className="hover:text-brand-600 transition-colors">Science</Link>
                    <Link href="/chat" className="hover:text-brand-600 transition-colors">AI Care Team</Link>
                </div>
                <Link href="/sign-in" className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all dark:bg-brand-100 dark:text-brand-950">Sign In</Link>
            </nav>

            {/* Hero */}
            <div className="relative pt-36 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="relative w-full h-full">
                        <Image src="/images/plans-hero.png" alt="Wellness ritual" fill className="object-cover opacity-10 dark:opacity-5" />
                    </div>
                </div>
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 text-brand-800 text-xs font-semibold uppercase tracking-widest mb-6 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        Simple, Transparent Pricing
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-brand-950 dark:text-brand-50 leading-tight mb-6">
                        One plan. <span className="italic text-brand-600">Zero hidden fees.</span>
                    </h1>
                    <p className="text-xl text-stone-500 dark:text-stone-400 font-light mb-4">
                        All plans include a licensed physician consultation, ongoing prescriptions, and 24/7 Lotus AI support. Pay monthly or save more with a longer commitment.
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {PLANS.map((plan, i) => (
                        <div
                            key={plan.name}
                            className={`rounded-3xl overflow-hidden border transition-all duration-300 ${i === 1
                                ? 'border-brand-400 shadow-2xl ring-2 ring-brand-400/20 md:-mt-4 md:-mb-4'
                                : 'border-brand-200/60 dark:border-brand-900/40 shadow-sm'
                                } bg-white dark:bg-[#2A2725]`}
                        >
                            {plan.badge && (
                                <div className="bg-brand-900 dark:bg-brand-600 text-center py-2 text-xs font-semibold tracking-widest uppercase text-brand-50">
                                    {plan.badge}
                                </div>
                            )}
                            <div className="p-8">
                                <div className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">{plan.name}</div>
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-6xl font-light text-brand-950 dark:text-brand-50">${plan.price}</span>
                                    <span className="text-stone-400 mb-2">/{plan.per}</span>
                                </div>
                                <p className="text-sm text-stone-500 dark:text-stone-400 font-light mb-8 leading-relaxed">{plan.description}</p>

                                <Link
                                    href={plan.href}
                                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-medium text-sm transition-all mb-8 hover:scale-[1.02] active:scale-95 ${i === 1
                                        ? 'bg-brand-900 text-brand-50 hover:bg-brand-800 shadow-lg dark:bg-brand-100 dark:text-brand-950'
                                        : 'border border-brand-300 dark:border-brand-700 text-brand-900 dark:text-brand-100 hover:bg-brand-50 dark:hover:bg-brand-900/30'
                                        }`}
                                >
                                    {plan.cta} <ArrowRight className="w-4 h-4" />
                                </Link>

                                <ul className="space-y-3">
                                    {plan.includes.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
                                            <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-stone-400 mt-8">All plans require a physician consultation. Prices shown are for compounded medications. Brand-name medications (Ozempic®, Wegovy®, Mounjaro®) available at additional cost. Prescription required.</p>
            </div>

            {/* Reviews */}
            <div className="bg-brand-950 dark:bg-black py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-light text-brand-50 text-center mb-12">Real results, real people</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {REVIEWS.map((r) => (
                            <div key={r.name} className="p-8 bg-brand-900/30 border border-brand-800 rounded-2xl">
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: r.stars }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                                    ))}
                                </div>
                                <p className="text-brand-200/80 font-light leading-relaxed mb-4 text-sm">&ldquo;{r.text}&rdquo;</p>
                                <div className="text-brand-400 text-sm font-medium">— {r.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ strip */}
            <div className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
                <h2 className="text-2xl font-light text-brand-950 dark:text-brand-50 mb-8 text-center">Common questions</h2>
                <div className="space-y-6">
                    {[
                        { q: 'Do I need insurance?', a: 'No. All Naked Health plans are self-pay with no insurance required. We keep costs transparent and low by working directly with compounding pharmacies.' },
                        { q: 'Is a real doctor involved?', a: 'Yes. Every prescription is written by a licensed US physician after reviewing your health profile. You have unlimited follow-up consultations included.' },
                        { q: 'Can I cancel anytime?', a: 'Monthly plans cancel any time with no penalty. Longer-term plans are billed upfront and pro-rated if cancelled.' },
                        { q: 'How long until I see results?', a: 'Most patients notice appetite reduction within the first week. Meaningful weight loss (5–10%) typically occurs within the first 4–8 weeks on GLP-1 medications.' },
                    ].map(({ q, a }) => (
                        <div key={q} className="border-b border-brand-200 dark:border-brand-800 pb-6">
                            <h3 className="font-medium text-brand-950 dark:text-brand-100 mb-2">{q}</h3>
                            <p className="text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed">{a}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="py-16 px-6 text-center bg-brand-100/50 dark:bg-brand-950/20">
                <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50 mb-4">Not sure where to start?</h2>
                <p className="text-stone-500 mb-8 font-light">Take our 2-minute quiz and we&apos;ll match you with the right plan.</p>
                <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg dark:bg-brand-100 dark:text-brand-950">
                    Take the Eligibility Quiz <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
