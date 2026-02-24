# Naked Health: 8-Hour Execution Sprint Prompt

*Copy and paste the following prompt into Cursor (using Claude 3.7 Sonnet) or provide it to your preferred AI coding agent to execute the 8-hour build.*

***

## Context & Objective
I am building the V1 web application for "Naked Health"—a progressive, premium telehealth brand focused on medical weight loss, metabolic health, and GLP-1 medication protocols. Our direct aesthetic competitors are brands like superpower.com, remedymeds.com, Hims, and Aesop. 

You are acting as my Lead Technical Co-Founder and Principal UX Engineer. We have 8 hours to construct a high-fidelity, production-ready web application that I can demo to financial partners.

Our aesthetic foundation is strictly defined: "spa-minimalism" blended with clinical sharpness. The aesthetic relies heavily on a warm golden-brown tint, minimalist typography (Inter), glassmorphism, and premium, editorial spacing. 

## Tech Stack Requirements
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (extensively utilizing a custom golden-brown/stone scale for deep contrast and warmth)
- **Icons**: Lucide React
- **AI Integration**: Vercel AI SDK (with a conversational interface connected to Claude 3.5 Sonnet or OpenAI)
- **Responsiveness**: Mobile-first design (this must function flawlessly on an iPhone screen as a PWA)

## Sprint Deliverables (To be completed sequentially)

### Phase 1: The "Superpower.com" Aesthetic & Navigation (Hours 1-2)
1. **Refine the Design Tokens**: Ensure `tailwind.config.ts` has a comprehensively scaled "brand" palette (golden-browns: `#faf8f5` to `#321e16`) and a "stone" palette for neutral text/backgrounds. Ensure typography rules (leading, tracking) match premium editorial standards.
2. **Global Components**: Build a highly polished, sticky glassmorphic navigation bar and a minimal, trustworthy footer.
3. **Slick UI Upgrades**: Polish the existing hero section and landing page to include subtle, high-performance CSS micro-animations (e.g., a slow fade-up on text render, slight hover scales on buttons, parallax scrolling effects). Add a "Science" section detailing GLP-1 efficacy.

### Phase 2: The Remedymeds-Style Onboarding Quiz (Hours 3-4)
1. **Interactive Quiz Overhaul**: Upgrade the `/quiz` onboarding flow. It must feel clinical yet highly empathetic. 
2. **Smooth Transitions**: Implement framer-motion or pure CSS transitions between quiz steps. 
3. **Data Collection Mock**: The quiz must gather simulated data (goals, current medication use, craving frequency) and pass this context state seamlessly to the AI consultation room at the end of the flow.

### Phase 3: The "Lotus" AI Care Team Integration (Hours 5-6)
1. **Chat UI Polish**: Refine the `/chat` route. The chat window must feel like a premium consultation room, not a generic SaaS chatbot. Implement smooth auto-scrolling, typing indicators (bouncing dots), and distinct, beautifully padded message bubbles.
2. **Backend API Route**: Implement `app/api/chat/route.ts` using the Vercel AI SDK. 
3. **The System Prompt (CRITICAL)**: Inject the following system prompt into the AI configuration:
   *"You are Lotus, the AI medical guide for Naked Health. You speak with calm, authoritative serenity. You are entirely non-judgmental. You provide cutting-edge guidance for medical weight loss, metabolic health, and GLP-1 therapy (Ozempic, Wegovy, etc.). Your tone is akin to a high-end concierge doctor—intelligent, concise, and deeply empathetic. You help patients manage side effects (nausea, fatigue), optimize their diet, and understand the biological nature of weight loss."*

### Phase 4: Patient Dashboard & Final QA (Hours 7-8)
1. Provide a "Patient Portal" dashboard view.
2. For the demo, this does not require a real database. Implement a beautiful, mocked dashboard where the user can see their "Prescription Status (GLP-1)," "Weight Loss Trajectory chart," and their 24/7 access portal to the Lotus AI.
3. Audit the entire application on mobile viewports (390px - 430px width).
4. Ensure the mobile navigation resolves to a sleek hamburger menu.

## Execution Rules
- **Do not use standard blue/red/green alert colors**. If a warning is needed, use deep amber.
- **Images**: Use Next/Image components beautifully layered to mimic high-end wellness photography. 
- **Micro-interactions matter**: Buttons must have satisfying click states (`active:scale-95`).
- **Pacing**: Acknowledge this prompt, and then ask for permission to begin Phase 1. Do not generate the entire app in one enormous block of code. 

***
