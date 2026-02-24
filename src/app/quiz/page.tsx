"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function QuizPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleNext = (question: string, answer: string) => {
        setAnswers(prev => ({ ...prev, [question]: answer }));
        setTimeout(() => {
            if (step < 4) {
                setStep(step + 1);
            } else {
                // Simulated submission to AI consultation room
                router.push('/chat?context=quiz-completed');
            }
        }, 400); // Small delay for UX transition
    };

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850 flex flex-col justify-center items-center px-6 selection:bg-brand-200">
            <Link href="/" className="absolute top-8 left-8 p-2 rounded-full hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-900 dark:text-brand-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="w-full max-w-lg">
                {/* Progress indicator */}
                <div className="flex gap-2 mb-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-brand-900 dark:bg-brand-100' : 'bg-brand-200 dark:bg-brand-900/40'}`}
                        />
                    ))}
                </div>

                {/* Question Area */}
                <div className="transition-all duration-300 transform translate-y-0 opacity-100">
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                            <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50 tracking-tight">What is your primary wellness goal?</h2>
                            <div className="space-y-4">
                                {['Significant weight loss (15+ lbs)', 'Metabolic reset & energy', 'Post-event recovery & sleep', 'General longevity protocol'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleNext('goal', opt)}
                                        className="w-full p-6 text-left rounded-xl border border-brand-200 dark:border-brand-800 hover:border-brand-600 dark:hover:border-brand-400 hover:bg-white dark:hover:bg-[#2A2725] transition-all bg-transparent text-brand-900 dark:text-brand-100 font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                            <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50 tracking-tight">Have you previously used GLP-1 medications?</h2>
                            <p className="text-stone-500 font-light -mt-4">Such as Ozempic, Wegovy, or Mounjaro.</p>
                            <div className="space-y-4">
                                {['Yes, currently using them', 'Yes, but not currently', 'No, I am exploring options'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleNext('glp1_history', opt)}
                                        className="w-full p-6 text-left rounded-xl border border-brand-200 dark:border-brand-800 hover:border-brand-600 hover:bg-white transition-all bg-transparent text-brand-900 dark:text-brand-100 font-medium active:scale-[0.98]"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                            <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50 tracking-tight">How often do you struggle with food noise or cravings?</h2>
                            <div className="space-y-4">
                                {['Constantly throughout the day', 'Mostly in the evenings', 'Occasionally', 'Rarely, my issue is purely metabolic'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleNext('cravings', opt)}
                                        className="w-full p-6 text-left rounded-xl border border-brand-200 dark:border-brand-800 hover:border-brand-600 hover:bg-white transition-all bg-transparent text-brand-900 dark:text-brand-100 font-medium active:scale-[0.98]"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 text-center">
                            <div className="w-20 h-20 mx-auto rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-8">
                                <CheckCircle2 className="w-10 h-10 text-brand-600 dark:text-brand-400" />
                            </div>
                            <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50 tracking-tight">Profile Analyzed.</h2>
                            <p className="text-stone-600 dark:text-stone-400 font-light max-w-sm mx-auto">
                                We have compiled your metabolic profile. You are being securely transferred to Lotus, your AI medical guide, to discuss your protocol.
                            </p>
                            <div className="pt-8">
                                <button
                                    onClick={() => handleNext('complete', 'done')}
                                    className="bg-brand-900 text-brand-50 px-8 py-4 rounded-full font-medium hover:bg-brand-800 transition-all shadow-lg flex items-center gap-2 mx-auto active:scale-95 duration-200 dark:bg-brand-100 dark:text-brand-950 dark:hover:bg-brand-200"
                                >
                                    Connect with Lotus <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
