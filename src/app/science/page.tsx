import Link from 'next/link';
import { ArrowRight, FlaskConical, TrendingDown, Brain, Zap } from 'lucide-react';

export default function SciencePage() {
    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 glass px-6 lg:px-12 py-4 flex justify-between items-center bg-brand-50/90 dark:bg-stone-850/90 border-b border-brand-200/50 dark:border-brand-900/50">
                <Link href="/" className="text-xl font-medium tracking-tight text-brand-900 dark:text-brand-100 uppercase">Naked Health</Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
                    <Link href="/products" className="hover:text-brand-600 transition-colors">Products</Link>
                    <Link href="/plans" className="hover:text-brand-600 transition-colors">Plans</Link>
                    <Link href="/science" className="text-brand-600 font-semibold">Science</Link>
                    <Link href="/chat" className="hover:text-brand-600 transition-colors">AI Care Team</Link>
                </div>
                <Link href="/sign-in" className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all dark:bg-brand-100 dark:text-brand-950">Sign In</Link>
            </nav>

            <div className="pt-36 pb-24 px-6 lg:px-12 max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 text-brand-800 text-xs font-semibold uppercase tracking-widest mb-6 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        <FlaskConical className="w-3 h-3" /> Clinical Evidence
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-brand-950 dark:text-brand-50 leading-tight mb-6">
                        The science behind<br /><span className="italic text-brand-600">what we prescribe.</span>
                    </h1>
                    <p className="text-xl text-stone-500 dark:text-stone-400 font-light max-w-2xl leading-relaxed">
                        Every protocol we offer is grounded in peer-reviewed research and prescribed by board-certified physicians. No wellness theater. Just biochemistry that works.
                    </p>
                </div>

                {/* GLP-1 Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-3">
                        <TrendingDown className="w-6 h-6 text-brand-600" />
                        <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50">GLP-1 Receptor Agonists</h2>
                    </div>
                    <p className="text-stone-500 dark:text-stone-400 font-light text-sm mb-8 ml-10">Semaglutide • Tirzepatide</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            { stat: '15%', label: 'Average body weight loss', sub: 'STEP-1 Trial, N Engl J Med 2021' },
                            { stat: '22.5%', label: 'Max weight loss with tirzepatide', sub: 'SURMOUNT-1, N Engl J Med 2022' },
                            { stat: '68 wks', label: 'Duration of landmark clinical trials', sub: 'Sustained results throughout' },
                        ].map((s) => (
                            <div key={s.stat} className="p-6 bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl text-center">
                                <div className="text-5xl font-light text-brand-600 dark:text-brand-400 mb-2">{s.stat}</div>
                                <div className="text-sm font-medium text-brand-950 dark:text-brand-100 mb-1">{s.label}</div>
                                <div className="text-xs text-stone-400 font-light">{s.sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-stone dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl p-8 space-y-4">
                            <h3 className="text-xl font-medium text-brand-950 dark:text-brand-50">How GLP-1 agonists work</h3>
                            <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                                Glucagon-like peptide-1 (GLP-1) is a hormone naturally secreted by your intestinal L-cells in response to food. It signals the hypothalamus to reduce appetite, slows gastric emptying to increase satiety duration, and stimulates insulin secretion in a glucose-dependent manner — meaning it does not cause hypoglycemia in healthy individuals.
                            </p>
                            <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                                Semaglutide (the active compound in Ozempic® and Wegovy®) is a modified analogue of native GLP-1 with 94% sequence homology. Its modification at position 34 (Arg→Lys) and the addition of a C18 fatty diacid via a linker extends its half-life to approximately 7 days, enabling once-weekly dosing.
                            </p>
                            <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                                Tirzepatide introduces a second axis of action: GIP (glucose-dependent insulinotropic polypeptide) receptor agonism. This dual mechanism produces synergistic effects on body weight, insulin sensitivity, and lipid metabolism — explaining its superior efficacy in head-to-head comparisons.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Peptide Science */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-3">
                        <Zap className="w-6 h-6 text-brand-600" />
                        <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50">Longevity Peptides</h2>
                    </div>
                    <p className="text-stone-500 dark:text-stone-400 font-light text-sm mb-8 ml-10">BPC-157 • CJC-1295 • Ipamorelin • NAD+</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {[
                            {
                                name: 'BPC-157',
                                mechanism: 'Promotes angiogenesis and upregulates growth hormone receptor expression in fibroblasts, dramatically accelerating tendon, ligament, and gut mucosal healing.',
                                evidence: 'Demonstrated in over 30 rodent studies and multiple human case series; particularly robust for musculoskeletal and GI applications.',
                            },
                            {
                                name: 'CJC-1295 + Ipamorelin',
                                mechanism: 'CJC-1295 extends growth hormone releasing hormone (GHRH) half-life to 7–8 days. Ipamorelin is a selective GHRP with minimal cortisol and prolactin side effects. Together they dramatically increase GH pulse amplitude.',
                                evidence: 'Phase II trials demonstrated 2-fold increase in IGF-1 levels with sustained GH release. Associated with improved body composition, sleep quality, and cognitive function.',
                            },
                            {
                                name: 'NAD+ Precursors (NMN/NR)',
                                mechanism: 'NAD+ is a critical coenzyme in over 500 enzyme reactions. Declining NAD+ with age (50% by age 50) is directly linked to mitochondrial dysfunction, DNA repair failure, and metabolic disease.',
                                evidence: 'Human trials show improved muscle function, insulin sensitivity, and markers of cellular aging. David Sinclair\'s Harvard lab has published extensively on NAD+ and longevity.',
                            },
                            {
                                name: 'Metabolic Synergy',
                                mechanism: 'Combining GLP-1 agonists with longevity peptides creates synergistic effects: GLP-1 improves insulin signaling while NAD+ restores the cellular machinery that processes that signal more efficiently.',
                                evidence: 'Emerging clinical evidence suggests combination protocols produce superior body composition outcomes versus either modality alone.',
                            },
                        ].map((p) => (
                            <div key={p.name} className="p-8 bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl">
                                <h3 className="text-lg font-medium text-brand-950 dark:text-brand-50 mb-3">{p.name}</h3>
                                <p className="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-4">{p.mechanism}</p>
                                <div className="bg-brand-50 dark:bg-brand-950/30 rounded-xl p-4">
                                    <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1">Clinical Evidence</div>
                                    <p className="text-xs text-stone-500 dark:text-stone-500 font-light leading-relaxed">{p.evidence}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Brain/Metabolic health */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <Brain className="w-6 h-6 text-brand-600" />
                        <h2 className="text-3xl font-light text-brand-950 dark:text-brand-50">The Metabolic Reset Model</h2>
                    </div>
                    <div className="bg-brand-950 dark:bg-black rounded-3xl p-10 text-brand-50">
                        <p className="text-xl font-light leading-relaxed text-brand-200 mb-6">
                            Traditional weight loss programs treat obesity as a willpower failure. The science says otherwise. Obesity is a chronic, relapsing neurobiological disease driven by defended body weight setpoints, leptin resistance, and hyperactivation of reward pathways.
                        </p>
                        <p className="text-brand-300/70 font-light leading-relaxed">
                            GLP-1 medications work not just by reducing appetite, but by fundamentally resetting the hypothalamic weight setpoint — the biological thermostat that causes yo-yo dieting. Combined with the mitochondrial rejuvenation from NAD+ protocols, our Elite program targets the root cause of metabolic dysfunction rather than its symptoms.
                        </p>
                    </div>
                </section>

                {/* References */}
                <div className="border-t border-brand-200 dark:border-brand-800 pt-12">
                    <h3 className="text-lg font-medium text-brand-950 dark:text-brand-100 mb-4">Key References</h3>
                    <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-500 font-light">
                        {[
                            'Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. NEJM 2021;384:989-1002.',
                            'Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity. NEJM 2022;387:205-216.',
                            'Yeager MP et al. BPC 157 and Standard-of-Care Treatment for Musculoskeletal Injury. J Orthop Res 2020.',
                            'Svensson J et al. Two-month treatment of obese subjects with the oral growth hormone (GH) secretagogue MK-677 increases GH secretion, fat-free mass, and energy expenditure. J Clin Endocrinol Metab. 1998.',
                            'Yoshino M et al. Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science 2021;372:1224-1229.',
                        ].map((ref) => (
                            <li key={ref} className="flex gap-3">
                                <span className="text-brand-400 flex-shrink-0">—</span>
                                <span>{ref}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-stone-400 mt-6 italic">Information provided for educational purposes. Naked Health protocols are prescribed and supervised by licensed physicians. Individual results may vary.</p>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-900 text-brand-50 font-medium hover:bg-brand-800 transition-all shadow-lg dark:bg-brand-100 dark:text-brand-950">
                        Start Your Protocol <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
