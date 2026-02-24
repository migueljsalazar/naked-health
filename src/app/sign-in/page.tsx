"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push('/');
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850 flex flex-col items-center justify-center px-6">
            <Link href="/" className="text-xl font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase mb-12">
                Naked Health
            </Link>

            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-3xl p-8 shadow-xl">
                    <h1 className="text-3xl font-light text-brand-950 dark:text-brand-50 mb-2">Welcome back</h1>
                    <p className="text-stone-500 dark:text-stone-400 text-sm font-light mb-8">Sign in to your Naked Health account</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-stone-850 text-brand-950 dark:text-brand-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-brand-800 dark:text-brand-300 uppercase tracking-widest mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-stone-850 text-brand-950 dark:text-brand-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all text-sm pr-12"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-brand-600">
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-xs text-brand-600 hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg hover:scale-[1.01] active:scale-95 disabled:opacity-60 dark:bg-brand-100 dark:text-brand-950"
                        >
                            {loading ? 'Signing in...' : <><span>Sign In</span><ArrowRight className="w-4 h-4" /></>}
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-brand-200 dark:border-brand-800" /></div>
                        <div className="relative flex justify-center text-xs text-stone-400 bg-white dark:bg-[#2A2725] px-4">or continue with</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {['Google', 'Apple'].map(provider => (
                            <button key={provider} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-200 dark:border-brand-800 text-sm font-medium text-brand-900 dark:text-brand-100 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-all">
                                {provider}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="text-center text-sm text-stone-500 mt-6 font-light">
                    Don&apos;t have an account?{' '}
                    <Link href="/sign-up" className="text-brand-600 hover:underline font-medium">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
