import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

export default function ProductsPage() {
    const weightLoss = PRODUCTS.filter(p => p.category === 'weight-loss');
    const longevity = PRODUCTS.filter(p => p.category === 'longevity');

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
                <Link href="/sign-in" className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm dark:bg-brand-100 dark:text-brand-950">
                    Sign In
                </Link>
            </nav>

            <div className="pt-28 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 text-brand-800 text-xs font-semibold uppercase tracking-widest mb-6 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        Clinical Protocols
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-brand-950 dark:text-brand-50 leading-tight mb-4">
                        Treatments built on <span className="italic text-brand-600">real science.</span>
                    </h1>
                    <p className="text-lg text-stone-600 dark:text-stone-400 font-light">
                        Every protocol is prescribed by licensed physicians and supported 24/7 by Lotus AI. No fluff. No fillers.
                    </p>
                </div>

                {/* Weight Loss Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl font-medium text-brand-950 dark:text-brand-100">Weight Loss</h2>
                        <span className="h-px flex-1 bg-brand-200 dark:bg-brand-800" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {weightLoss.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                </section>

                {/* Longevity Section */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Leaf className="w-5 h-5 text-brand-600" />
                        <h2 className="text-2xl font-medium text-brand-950 dark:text-brand-100">Longevity Peptides</h2>
                        <span className="h-px flex-1 bg-brand-200 dark:bg-brand-800" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {longevity.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
    return (
        <Link href={`/products/${product.slug}`} className="group block bg-white dark:bg-[#2A2725] rounded-2xl overflow-hidden border border-brand-200/60 dark:border-brand-900/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden bg-brand-100/40 dark:bg-brand-950/20">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                    <div className="absolute top-4 left-4 bg-brand-900 dark:bg-brand-100 text-brand-50 dark:text-brand-950 text-xs font-semibold px-3 py-1 rounded-full">
                        {product.badge}
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="text-xs text-brand-600 dark:text-brand-400 uppercase tracking-widest font-semibold mb-1">
                    {product.category === 'longevity' ? 'Longevity' : 'Weight Loss'}
                </div>
                <h3 className="text-xl font-medium text-brand-950 dark:text-brand-50 mb-2">{product.name}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed line-clamp-2 mb-4">
                    {product.tagline}
                </p>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xs text-stone-400 dark:text-stone-500">Starting at</span>
                        <div className="text-2xl font-light text-brand-950 dark:text-brand-100">
                            ${product.startingPrice}<span className="text-sm text-stone-500">/mo</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center group-hover:bg-brand-900 dark:group-hover:bg-brand-100 transition-colors">
                        <ArrowRight className="w-4 h-4 text-brand-700 dark:text-brand-300 group-hover:text-white dark:group-hover:text-brand-950 transition-colors" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
