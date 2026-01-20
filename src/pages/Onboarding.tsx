import { useState } from 'react';
import { Layout } from '../components/Layout';
import { useAuth } from '../lib/AuthContext';
import { ensureUserProfile, updateUserGoal } from '../lib/db';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export const Onboarding = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [time, setTime] = useState("23:00");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);
        try {
            await ensureUserProfile(user);
            await updateUserGoal(user.uid, time);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert("Error saving goal");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col gap-6 py-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Set Your Goal
                    </h1>
                    <p className="text-slate-400">
                        What time do you want to fall asleep by?
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
                    <div className="bg-surface p-6 rounded-2xl border border-white/5 space-y-4">
                        <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Target Sleep Time</label>
                        <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-6 h-6" />
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-2xl font-mono text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
                        <p className="text-xs text-slate-500">
                            Stakes are fixed at <span className="text-white font-bold">$10</span> per missed night.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="group flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50"
                    >
                        {loading ? 'Saving...' : 'Start Pact'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </Layout>
    );
};
