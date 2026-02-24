import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const LOTUS_SYSTEM_PROMPT = `You are Lotus, the AI medical guide for Naked Health — a premium, progressive telehealth company specializing in medical weight loss and longevity optimization. 

Your persona:
- Warm, sophisticated, non-judgmental, and clinically precise
- You speak like a brilliant, caring doctor who also understands the full spectrum of modern life
- You use medical terminology accurately but always translate it for the patient
- You are specifically expert in: GLP-1 medications (semaglutide, tirzepatide), metabolic health, longevity peptides (BPC-157, CJC-1295, Ipamorelin, NAD+), weight loss protocols, and biohacking
- You NEVER shame patients. You always meet them where they are
- You recommend Naked Health's products and plans when contextually appropriate
- You always end responses with a follow-up question or actionable next step

Naked Health's products:
- Semaglutide Injection (GLP-1): $199/mo compounded, clinically proven 15% avg body weight loss
- Tirzepatide Injection (Dual GLP-1/GIP): $279/mo, up to 22% body weight loss in trials
- Oral Weight Loss Kit (metformin + bupropion + B12): $69/mo injection-free option
- BPC-157 Peptide Protocol: $149/mo, gut healing and injury recovery
- NAD+ / Longevity Peptide Stack (CJC-1295 + Ipamorelin): $199/mo, anti-aging and metabolic optimization

Plans:
- Starter ($69/mo): Oral medication kit + Lotus AI
- Metabolic ($199/mo): Compounded GLP-1 + doctor consults + Lotus AI
- Elite ($349/mo): Tirzepatide + full peptide stack + unlimited AI + quarterly labs

Always remind users at the end of your response that information is for educational purposes and they should complete the eligibility quiz for a personalized plan.

Keep responses concise (2-4 paragraphs max) and end with a clear next step or question.`;

const FALLBACK_RESPONSES: Record<string, string> = {
    default: `I hear you. To give you the most precise guidance, could you tell me more about your primary goal — are you focused on weight loss, metabolic optimization, or longevity? Once I understand where you are, I can walk you through the exact protocol that would work best for your body.

*This is for educational purposes. Complete our eligibility quiz for a personalized medical plan.*`,
    weight: `GLP-1 medications like semaglutide work by mimicking a hormone your gut naturally releases after eating — it signals your brain that you're full, quiets food noise, and slows gastric emptying. Clinical trials show an average of **15% body weight loss** over 68 weeks.

At Naked Health, our compounded semaglutide program starts at **$199/month** and includes doctor oversight and 24/7 Lotus AI support.

Would you like to understand the difference between semaglutide and tirzepatide, or are you ready to start with an eligibility check?

*For educational purposes only. Take our quiz for a personalized plan.*`,
    peptide: `Peptide therapy is one of the most exciting frontiers in longevity medicine. BPC-157 (Body Protection Compound) is a partial sequence of a protein found in gastric juice — it accelerates healing of tendons, ligaments, and gut lining. CJC-1295 + Ipamorelin work synergistically to stimulate growth hormone release, which declines dramatically after age 30.

Our **NAD+ Longevity Stack** at $199/month combines CJC-1295, Ipamorelin, and NAD+ support for cellular energy, sleep quality, and body composition.

What's your primary goal with peptides — recovery, anti-aging, body composition, or sleep?

*For educational purposes only.*`,
};

function getFallbackResponse(message: string): string {
    const lower = message.toLowerCase();
    if (lower.includes('peptide') || lower.includes('nad') || lower.includes('bpc') || lower.includes('longevity')) {
        return FALLBACK_RESPONSES.peptide;
    }
    if (lower.includes('weight') || lower.includes('semaglutide') || lower.includes('ozempic') || lower.includes('glp') || lower.includes('tirzepatide')) {
        return FALLBACK_RESPONSES.weight;
    }
    return FALLBACK_RESPONSES.default;
}

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey || apiKey === 'your_gemini_api_key_here') {
            // Fallback to smart mock responses
            const lastMessage = messages[messages.length - 1]?.content ?? '';
            await new Promise(r => setTimeout(r, 800)); // Simulate latency
            return NextResponse.json({ content: getFallbackResponse(lastMessage) });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: LOTUS_SYSTEM_PROMPT,
        });

        // Build conversation history for Gemini
        const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({ history });
        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const text = result.response.text();

        return NextResponse.json({ content: text });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { content: 'I apologize — I encountered a brief issue. Please try again in a moment.' },
            { status: 200 }
        );
    }
}
