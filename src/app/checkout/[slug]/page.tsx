"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

export default function CheckoutPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const slug = params.slug as string;
    const planLabel = searchParams.get('plan') ?? '6-month';
    const product = PRODUCTS.find(p => p.slug === slug);

    const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
    const [loading, setLoading] = useState(false);

    const selectedPlan = product?.plans.find(p => p.label.toLowerCase() === planLabel) ?? product?.plans[2];

    const handleDetails = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('payment');
    };

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('success');
        }, 2000);
    };

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-50 dark:bg-stone-850">
                <div className="text-center">
                    <p className="text-brand-950 dark:text-brand-50 mb-4">Product not found.</p>
                    <Link href="/products" className="text-brand-600 hover:underline">← Back to Products</Link>
                </div>
            </div>
        );
    }

    if (step === 'success') {
        return (
            <div className="min-h-screen bg-brand-50 dark:bg-stone-850 flex flex-col items-center justify-center px-6 text-center">
                <div className="w-24 h-24 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-brand-600" />
                </div>
                <h1 className="text-4xl font-light text-brand-950 dark:text-brand-50 mb-4">You&apos;re in.</h1>
                <p className="text-stone-500 dark:text-stone-400 font-light max-w-md mb-2">
                    Your order for <strong className="font-medium text-brand-800 dark:text-brand-200">{product.name}</strong> ({selectedPlan?.label} plan) has been received.
                </p>
                <p className="text-stone-500 dark:text-stone-400 font-light max-w-md mb-10">
                    A licensed physician will review your health profile within 24 hours. We&apos;ll email you next steps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/chat" className="px-8 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg dark:bg-brand-100 dark:text-brand-950">
                        Meet Lotus AI
                    </Link>
                    <Link href="/" className="px-8 py-4 rounded-full border border-brand-300 dark:border-brand-700 text-brand-900 dark:text-brand-100 font-medium hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850">
            <nav className="px-6 lg:px-12 py-4 flex justify-between items-center border-b border-brand-200/50 dark:border-brand-900/50">
                <Link href={`/products/${slug}`} className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-brand-600 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
                <span className="text-base font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase">Naked Health</span>
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <Lock className="w-3 h-3" /> Secure Checkout
                </div>
            </nav>

            <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Form */}
                <div className="lg:col-span-3">
                    {/* Steps */}
                    <div className="flex items-center gap-4 mb-10">
                        {[{ id: 'details', label: '1. Your Info' }, { id: 'payment', label: '2. Payment' }].map((s) => (
                            <div key={s.id} className={`text-sm font-medium ${s.id === step ? 'text-brand-900 dark:text-brand-100' : 'text-stone-400'}`}>
                                {s.label}
                            </div>
                        ))}
                    </div>

                    {step === 'details' && (
                        <form onSubmit={handleDetails} className="space-y-5">
                            <h2 className="text-2xl font-light text-brand-950 dark:text-brand-50 mb-6">Your information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">First Name</label>
                                    <input type="text" required placeholder="Jane" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Last Name</label>
                                    <input type="text" required placeholder="Doe" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Email</label>
                                <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Date of Birth</label>
                                <input type="date" required className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50" />
                            </div>
                            <button type="submit" className="w-full py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg mt-4 dark:bg-brand-100 dark:text-brand-950">
                                Continue to Payment
                            </button>
                        </form>
                    )}

                    {step === 'payment' && (
                        <form onSubmit={handlePayment} className="space-y-5">
                            <h2 className="text-2xl font-light text-brand-950 dark:text-brand-50 mb-6">Payment details</h2>
                            <div>
                                <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Card Number</label>
                                <input type="text" placeholder="4242 4242 4242 4242" maxLength={19} className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400 font-mono" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Expiry</label>
                                    <input type="text" placeholder="MM / YY" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">CVC</label>
                                    <input type="text" placeholder="• • •" maxLength={3} className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Name on Card</label>
                                <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-stone-850 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-brand-950 dark:text-brand-50 placeholder:text-stone-400" />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg mt-4 disabled:opacity-60 dark:bg-brand-100 dark:text-brand-950"
                            >
                                <Lock className="w-4 h-4" />
                                {loading ? 'Processing...' : `Complete Order — $${selectedPlan?.price}/mo`}
                            </button>
                            <p className="text-center text-xs text-stone-400">This is a demo. No real charge will be made.</p>
                        </form>
                    )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl p-6 sticky top-6">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-800 dark:text-brand-300 mb-4">Order Summary</h3>
                        <div className="flex items-start gap-4 pb-5 border-b border-brand-100 dark:border-brand-900/40 mb-5">
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-100 dark:bg-brand-950/30 flex-shrink-0">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-brand-950 dark:text-brand-50">{product.name}</div>
                                <div className="text-xs text-stone-500 mt-0.5">{selectedPlan?.label} plan</div>
                                <div className="text-xs text-stone-400 mt-0.5">{selectedPlan?.description}</div>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm mb-5">
                            <div className="flex justify-between text-stone-600 dark:text-stone-400">
                                <span>Monthly</span>
                                <span>${selectedPlan?.price}/mo</span>
                            </div>
                            <div className="flex justify-between text-stone-600 dark:text-stone-400">
                                <span>Physician consultation</span>
                                <span className="text-brand-600">Included</span>
                            </div>
                            <div className="flex justify-between text-stone-600 dark:text-stone-400">
                                <span>Lotus AI access</span>
                                <span className="text-brand-600">Included</span>
                            </div>
                            <div className="flex justify-between font-medium text-brand-950 dark:text-brand-50 pt-2 border-t border-brand-100 dark:border-brand-900/40">
                                <span>Total today</span>
                                <span>${selectedPlan?.price}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-stone-500 dark:text-stone-500">
                            <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                            <span>Protected by 256-bit SSL encryption. Physician review required before shipment.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
