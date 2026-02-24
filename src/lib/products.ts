export type Product = {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    startingPrice: number;
    monthlyPrice: number;
    badge?: string;
    category: 'weight-loss' | 'longevity';
    details: string[];
    ingredients: { name: string; description: string }[];
    plans: { label: string; price: number; per: string; description: string }[];
};

export const PRODUCTS: Product[] = [
    {
        slug: 'semaglutide',
        name: 'Semaglutide (GLP-1)',
        tagline: 'The gold standard in medical weight loss.',
        description:
            'Compounded semaglutide mimics the GLP-1 hormone your gut naturally releases after eating — silencing food noise, reducing cravings, and signaling satiety to your brain. Clinical trials show an average of 15% body weight reduction over 68 weeks.',
        image: '/images/semaglutide-pen.png',
        startingPrice: 199,
        monthlyPrice: 199,
        badge: 'Most Popular',
        category: 'weight-loss',
        details: [
            '15% average body weight loss in clinical trials',
            'Weekly self-injection — takes 10 seconds',
            'Reduces food noise within the first week',
            'Doctor-supervised dosage titration',
            'Includes unlimited Lotus AI support',
        ],
        ingredients: [
            { name: 'Semaglutide', description: 'GLP-1 receptor agonist that mimics satiety hormones' },
            { name: 'Bacteriostatic Water', description: 'Pharmaceutical-grade diluent for subcutaneous injection' },
            { name: 'Vitamin B12 (optional add-on)', description: 'Energy support and injection-site tolerability' },
        ],
        plans: [
            { label: 'Monthly', price: 249, per: 'mo', description: 'Cancel anytime' },
            { label: '3-Month', price: 219, per: 'mo', description: 'Billed as $657 quarterly' },
            { label: '6-Month', price: 199, per: 'mo', description: 'Billed as $1,194 — Best Value' },
        ],
    },
    {
        slug: 'tirzepatide',
        name: 'Tirzepatide (GLP-1/GIP)',
        tagline: 'The next generation in metabolic medicine.',
        description:
            'Tirzepatide is a dual-agonist targeting both GLP-1 and GIP receptors — making it significantly more powerful than semaglutide alone. In the SURMOUNT-1 trial, participants lost up to 22.5% of body weight. It also dramatically improves insulin sensitivity.',
        image: '/images/tirzepatide-pen.png',
        startingPrice: 279,
        monthlyPrice: 279,
        badge: 'Strongest Results',
        category: 'weight-loss',
        details: [
            'Up to 22.5% average body weight loss in SURMOUNT-1',
            'Dual GLP-1 + GIP receptor activation',
            'Superior insulin sensitivity improvement',
            'Weekly injection with auto-pen',
            'Includes quarterly lab work review',
        ],
        ingredients: [
            { name: 'Tirzepatide', description: 'Dual GIP and GLP-1 receptor agonist' },
            { name: 'L-Histidine Buffer', description: 'Stabilizes the peptide formulation' },
            { name: 'Polysorbate 80', description: 'Pharmaceutical-grade solubilizer' },
        ],
        plans: [
            { label: 'Monthly', price: 329, per: 'mo', description: 'Cancel anytime' },
            { label: '3-Month', price: 299, per: 'mo', description: 'Billed as $897 quarterly' },
            { label: '6-Month', price: 279, per: 'mo', description: 'Billed as $1,674 — Best Value' },
        ],
    },
    {
        slug: 'oral-kit',
        name: 'Oral Weight Loss Kit',
        tagline: 'Injection-free. Just as effective.',
        description:
            'Our personalized oral kit combines proven metabolic medications — metformin, bupropion, and topiramate — with prescription-strength vitamin B12. For those who prefer pills over injections, this protocol delivers significant results without needles.',
        image: '/images/oral-kit.png',
        startingPrice: 69,
        monthlyPrice: 69,
        category: 'weight-loss',
        details: [
            'No injections required',
            'Targets dopamine pathways to reduce binge eating',
            'Metformin improves insulin sensitivity',
            'Topiramate reduces appetite and cravings',
            'FSA/HSA eligible',
        ],
        ingredients: [
            { name: 'Metformin', description: 'Improves insulin sensitivity; reduces hepatic glucose production' },
            { name: 'Bupropion', description: 'Dopamine reuptake inhibitor that reduces compulsive eating' },
            { name: 'Topiramate', description: 'Anticonvulsant with powerful appetite-suppressing properties' },
            { name: 'Vitamin B12', description: 'Counters metformin-related B12 depletion, boosts energy' },
        ],
        plans: [
            { label: 'Monthly', price: 99, per: 'mo', description: 'Cancel anytime' },
            { label: '3-Month', price: 79, per: 'mo', description: 'Billed as $237 quarterly' },
            { label: '10-Month', price: 69, per: 'mo', description: 'Billed as $690 — Best Value' },
        ],
    },
    {
        slug: 'bpc157',
        name: 'BPC-157 Peptide Protocol',
        tagline: 'Heal faster. Move better. Live longer.',
        description:
            'BPC-157 (Body Protection Compound) is a partial sequence of a naturally-occurring protein in gastric juice. It dramatically accelerates healing of tendons, ligaments, gut lining, and muscle tissue. Used by athletes and longevity-focused individuals worldwide.',
        image: '/images/bpc157-vial.png',
        startingPrice: 149,
        monthlyPrice: 149,
        badge: 'Longevity',
        category: 'longevity',
        details: [
            'Accelerates tendon and ligament healing',
            'Repairs gut lining (leaky gut, IBS)',
            'Reduces systemic inflammation',
            'Improves joint mobility and pain scores',
            'Daily subcutaneous or oral administration',
        ],
        ingredients: [
            { name: 'BPC-157', description: '15-amino acid peptide sequence from human gastric juice' },
            { name: 'Bacteriostatic Water', description: 'Pharmaceutical-grade reconstitution solution' },
            { name: 'Acetic Acid buffer', description: 'Maintains peptide stability at physiological pH' },
        ],
        plans: [
            { label: 'Monthly', price: 179, per: 'mo', description: 'Cancel anytime' },
            { label: '3-Month', price: 159, per: 'mo', description: 'Billed as $477 quarterly' },
            { label: '6-Month', price: 149, per: 'mo', description: 'Billed as $894 — Best Value' },
        ],
    },
    {
        slug: 'longevity-stack',
        name: 'NAD+ Longevity Stack',
        tagline: 'Reverse your biological clock.',
        description:
            'Our flagship longevity stack combines CJC-1295 and Ipamorelin — peptides that stimulate natural growth hormone secretion — with a comprehensive NAD+ support protocol. The result: improved sleep architecture, lean body composition, and measurable cellular rejuvenation.',
        image: '/images/nad-vial.png',
        startingPrice: 199,
        monthlyPrice: 199,
        badge: 'Elite',
        category: 'longevity',
        details: [
            'Stimulates natural growth hormone release',
            'Improves deep sleep (SWS) duration',
            'Enhances lean muscle composition',
            'Supports cellular NAD+ for mitochondrial function',
            'Monthly nurse practitioner check-in included',
        ],
        ingredients: [
            { name: 'CJC-1295', description: 'GHRH analogue that extends the pulse of growth hormone secretion' },
            { name: 'Ipamorelin', description: 'Selective GH secretagogue with minimal cortisol impact' },
            { name: 'NAD+ Precursors (NMN/NR)', description: 'Replenishes cellular NAD+ for mitochondrial function' },
        ],
        plans: [
            { label: 'Monthly', price: 249, per: 'mo', description: 'Cancel anytime' },
            { label: '3-Month', price: 219, per: 'mo', description: 'Billed as $657 quarterly' },
            { label: '6-Month', price: 199, per: 'mo', description: 'Billed as $1,194 — Best Value' },
        ],
    },
];

export function getProduct(slug: string): Product | undefined {
    return PRODUCTS.find(p => p.slug === slug);
}
