"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, User, Sparkles } from 'lucide-react';

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
};

const INITIAL_MESSAGE: Message = {
    id: '1',
    role: 'assistant',
    content: "Welcome. I'm Lotus — your AI medical guide at Naked Health.\n\nI'm here to provide thoughtful, non-judgmental guidance on weight loss, metabolic health, longevity peptides, and anything in between. How can I help you today?",
};

const SUGGESTED_PROMPTS = [
    "What's the difference between semaglutide and tirzepatide?",
    "Tell me about longevity peptides",
    "Which plan is right for me?",
    "How fast will I see results?",
];

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isTyping) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput('');
        setIsTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.content ?? "I'm sorry, I encountered an issue. Please try again.",
            };
            setMessages(prev => [...prev, aiResponse]);
        } catch {
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "I'm having trouble connecting right now. Please try again in a moment.",
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const renderContent = (content: string) => {
        // Render **bold** markdown
        return content.split('\n').map((line, i) => {
            const parts = line.split(/\*\*(.*?)\*\*/g);
            return (
                <span key={i}>
                    {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j} className="font-semibold">{part}</strong> : part
                    )}
                    {i < content.split('\n').length - 1 && <br />}
                </span>
            );
        });
    };

    return (
        <div className="flex flex-col h-full w-full max-w-3xl mx-auto bg-brand-50 dark:bg-stone-850 shadow-2xl md:border-x border-brand-200/50 dark:border-brand-900/40 relative">
            {/* Header */}
            <header className="flex-none px-6 py-4 border-b border-brand-200 dark:border-brand-900/50 bg-white/50 dark:bg-stone-850/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
                <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-900 dark:text-brand-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="flex flex-col items-center">
                    <span className="font-medium text-brand-950 dark:text-brand-50 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                        Lotus Guide
                    </span>
                    <span className="text-xs text-brand-600 dark:text-brand-400 font-medium tracking-wider uppercase">Naked Health AI</span>
                </div>
                <div className="w-9 h-9" />
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-brand-50/50 dark:bg-stone-850/50">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className="flex-none">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.role === 'assistant'
                                    ? 'bg-brand-900 text-brand-50 dark:bg-brand-100 dark:text-brand-950'
                                    : 'bg-brand-200 text-brand-800 dark:bg-brand-900 dark:text-brand-200'
                                    }`}>
                                    {message.role === 'assistant' ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                </div>
                            </div>
                            <div className={`rounded-2xl px-5 py-3.5 shadow-sm text-[15px] leading-relaxed ${message.role === 'user'
                                ? 'bg-brand-900 text-white rounded-tr-sm dark:bg-brand-200 dark:text-brand-950'
                                : 'bg-white text-stone-800 border border-brand-200/60 rounded-tl-sm dark:bg-[#2A2725] dark:border-brand-900/40 dark:text-stone-200'
                                }`}>
                                {renderContent(message.content)}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex gap-3 max-w-[85%] flex-row">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-900 text-brand-50 dark:bg-brand-100 dark:text-brand-950">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <div className="bg-white dark:bg-[#2A2725] border border-brand-200/60 dark:border-brand-900/40 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Suggested prompts — show only initially */}
                {messages.length === 1 && !isTyping && (
                    <div className="space-y-2">
                        <p className="text-xs text-stone-400 font-medium uppercase tracking-wider ml-11">Suggested questions</p>
                        {SUGGESTED_PROMPTS.map((prompt) => (
                            <button
                                key={prompt}
                                onClick={() => sendMessage(prompt)}
                                className="ml-11 block text-left text-sm px-4 py-2.5 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-[#2A2725] text-stone-700 dark:text-stone-300 hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-all"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex-none p-4 bg-white dark:bg-[#2A2725] border-t border-brand-200 dark:border-brand-900/50">
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about weight loss, peptides, or your protocol..."
                        className="w-full bg-brand-50 dark:bg-stone-850 border border-brand-200 dark:border-brand-800 rounded-full pl-6 pr-14 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all placeholder:text-stone-400 dark:placeholder:text-stone-500 text-stone-800 dark:text-stone-200"
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-900 hover:bg-brand-800 text-white flex items-center justify-center transition-all disabled:opacity-50 dark:bg-brand-200 dark:text-brand-950 dark:hover:bg-brand-300"
                    >
                        <Send className="w-4 h-4 -ml-0.5" />
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p className="text-[10px] text-stone-400 font-medium uppercase tracking-widest">
                        Educational purposes only · Not a substitute for medical advice
                    </p>
                </div>
            </div>
        </div>
    );
}
