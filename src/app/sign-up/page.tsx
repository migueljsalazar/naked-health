"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push('/quiz');
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850 flex flex-col items-center justify-center px-6">
            <Link href="/" className="text-xl font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase mb-12">
                Naked Health
            </Link>

            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-3xl p-8 shadow-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 text-brand-800 text-xs font-semibold uppercase tracking-widest mb-6 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        Free to Start
                    </div>
                    <h1 className="text-3xl font-light text-brand-950 dark:text-brand-50 mb-2">Create your account</h1>
                    <p className="text-stone-500 dark:text-stone-400 text-sm font-light mb-8">Join thousands reshaping their metabolism</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">First Name</label>
                                <input type="text" required placeholder="Jane" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-stone-850 text-brand-950 dark:text-brand-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Last Name</label>
                                <input type="text" required placeholder="Doe" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-stone-850 text-brand-950 dark:text-brand-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Email</label>
                            <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-stone-850 text-brand-950 dark:text-brand-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} required placeholder="Min. 8 characters" className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-stone-850 text-brand-950 dark:text-brand-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-sm pr-12" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-brand-600">
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg hover:scale-[1.01] active:scale-95 disabled:opacity-60 dark:bg-brand-100 dark:text-brand-950"
                        >
                            {loading ? 'Creating account...' : <><span>Create Account & Take Quiz</span><ArrowRight className="w-4 h-4" /></>}
                        </button>
                    </form>

                    <p className="text-center text-xs text-stone-400 mt-5 font-light leading-relaxed">
                        By creating an account you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                    </p>
                </div>

                <p className="text-center text-sm text-stone-500 mt-6 font-light">
                    Already have an account?{' '}
                    <Link href="/sign-in" className="text-brand-600 hover:underline font-medium">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
