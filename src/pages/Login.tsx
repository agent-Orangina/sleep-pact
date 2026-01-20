import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../lib/firebase';
import { Layout } from '../components/Layout';
import { LogIn, AlertTriangle } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export const Login = () => {
    const { user, loading } = useAuth();

    if (loading) return null;
    if (user) return <Navigate to="/dashboard" replace />;

    const handleLogin = async () => {
        if (!isFirebaseConfigured) {
            alert("Firebase is not configured. Please add your API keys to .env");
            return;
        }
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error(error);
            alert("Login failed. Check console.");
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                        Sleep Pact
                    </h1>
                    <p className="text-slate-400">Put your money where your sleep is.</p>
                </div>

                {!isFirebaseConfigured && (
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 rounded-lg text-sm flex gap-2 items-start">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <p>Firebase is not configured. Edit .env to log in.</p>
                    </div>
                )}

                <button
                    onClick={handleLogin}
                    disabled={!isFirebaseConfigured}
                    className="flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <LogIn className="w-5 h-5" />
                    Sign in with Google
                </button>
            </div>
        </Layout>
    );
}
