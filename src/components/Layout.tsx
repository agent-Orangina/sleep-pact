import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30 relative">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[128px]" />
            </div>

            <main className="relative z-10 container mx-auto px-4 py-8 max-w-md">
                {children}
            </main>
        </div>
    );
};
