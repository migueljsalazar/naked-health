import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, getProduct } from '@/lib/products';

export function generateStaticParams() {
    return PRODUCTS.map(p => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-50 dark:bg-stone-850">
                <div className="text-center">
                    <h1 className="text-2xl font-light text-brand-950 dark:text-brand-50 mb-4">Product not found</h1>
                    <Link href="/products" className="text-brand-600 hover:underline">← Back to Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 glass px-6 lg:px-12 py-4 flex justify-between items-center bg-brand-50/90 dark:bg-stone-850/90 border-b border-brand-200/50 dark:border-brand-900/50">
                <Link href="/" className="text-xl font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase">
                    Naked Health
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
                    <Link href="/products" className="text-brand-600 font-semibold">Products</Link>
                    <Link href="/plans" className="hover:text-brand-600 transition-colors">Plans</Link>
                    <Link href="/science" className="hover:text-brand-600 transition-colors">Science</Link>
                    <Link href="/chat" className="hover:text-brand-600 transition-colors">AI Care Team</Link>
                </div>
                <Link href="/sign-in" className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all dark:bg-brand-100 dark:text-brand-950">
                    Sign In
                </Link>
            </nav>

            <div className="pt-24">
                {/* Back */}
                <div className="px-6 lg:px-12 max-w-7xl mx-auto pt-6">
                    <Link href="/products" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-brand-600 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> All Products
                    </Link>
                </div>

                {/* Hero */}
                <div className="px-6 lg:px-12 max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[50vh] lg:h-[65vh] rounded-3xl overflow-hidden bg-brand-100/40 dark:bg-brand-950/20 shadow-2xl">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        {product.badge && (
                            <div className="absolute top-6 left-6 bg-brand-900 dark:bg-brand-100 text-brand-50 dark:text-brand-950 text-xs font-semibold px-4 py-1.5 rounded-full">
                                {product.badge}
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="text-xs text-brand-600 dark:text-brand-400 uppercase tracking-widest font-semibold">
                            {product.category === 'longevity' ? 'Longevity Protocol' : 'Weight Loss'}
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-brand-950 dark:text-brand-50 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-xl font-light italic text-brand-600 dark:text-brand-400">{product.tagline}</p>
                        <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">{product.description}</p>

                        <ul className="space-y-3">
                            {product.details.map((d) => (
                                <li key={d} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300">
                                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                                    {d}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Link
                                href={`/checkout/${product.slug}`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg hover:scale-[1.02] active:scale-95 duration-200 dark:bg-brand-100 dark:text-brand-950"
                            >
                                Subscribe & Save <ArrowRight className="w-4 h-4" />
                            </Link>
                            <p className="text-xs text-stone-400 mt-3">Starting at ${product.startingPrice}/mo · Cancel anytime · Physician-supervised</p>
                        </div>
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="bg-brand-950 dark:bg-black py-20 px-6 mt-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-light text-brand-50 mb-3">Choose your plan</h2>
                        <p className="text-brand-200/70 mb-12 font-light">Longer commitments unlock the best pricing.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {product.plans.map((plan, i) => (
                                <div
                                    key={plan.label}
                                    className={`rounded-2xl p-8 border transition-all ${i === 2
                                        ? 'border-brand-400 bg-brand-900/60 shadow-2xl scale-105'
                                        : 'border-brand-800 bg-brand-900/20'}`}
                                >
                                    {i === 2 && (
                                        <div className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">Best Value</div>
                                    )}
                                    <div className="text-brand-200 font-medium mb-1">{plan.label}</div>
                                    <div className="text-5xl font-light text-brand-50 mb-1">${plan.price}</div>
                                    <div className="text-brand-400 text-sm mb-3">/{plan.per}</div>
                                    <div className="text-brand-300/60 text-sm mb-8">{plan.description}</div>
                                    <Link
                                        href={`/checkout/${product.slug}?plan=${plan.label.toLowerCase()}`}
                                        className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${i === 2
                                            ? 'bg-brand-400 text-brand-950 hover:bg-brand-300'
                                            : 'border border-brand-700 text-brand-300 hover:border-brand-400 hover:text-brand-100'}`}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ingredients */}
                <div className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50 mb-10">What&apos;s inside</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {product.ingredients.map((ing) => (
                            <div key={ing.name} className="p-6 bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl">
                                <div className="text-sm font-semibold text-brand-800 dark:text-brand-300 mb-2">{ing.name}</div>
                                <p className="text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed">{ing.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="py-16 px-6 text-center border-t border-brand-200 dark:border-brand-900/40">
                    <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">Not sure which product is right for you?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quiz" className="px-8 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all dark:bg-brand-100 dark:text-brand-950">
                            Take the Eligibility Quiz
                        </Link>
                        <Link href="/chat" className="px-8 py-4 rounded-full border border-brand-300 dark:border-brand-700 text-brand-900 dark:text-brand-100 font-medium hover:bg-brand-100 dark:hover:bg-brand-900/30 transition-all">
                            Ask Lotus AI
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
