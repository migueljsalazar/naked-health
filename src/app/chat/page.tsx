import { ChatInterface } from '@/components/ChatInterface';

export default function ChatPage() {
    return (
        <div className="min-h-screen bg-brand-50 dark:bg-stone-850 flex flex-col">
            <main className="flex-grow flex flex-col h-screen max-h-screen">
                <ChatInterface />
            </main>
        </div>
    );
}
