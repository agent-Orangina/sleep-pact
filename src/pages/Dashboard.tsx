import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { useAuth } from '../lib/AuthContext';
import { type UserProfile, ensureUserProfile, getGroupStats, logDailySleep } from '../lib/db';
import { LogOut, CheckCircle2, XCircle, DollarSign, Moon, Settings } from 'lucide-react';
import { auth, isFirebaseConfigured } from '../lib/firebase';
import { format, subDays } from 'date-fns';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [group, setGroup] = useState<UserProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const [logging, setLogging] = useState(false);

    useEffect(() => {
        if (!user || !isFirebaseConfigured) return;

        const loadData = async () => {
            try {
                const p = await ensureUserProfile(user);
                setProfile(p);
                const g = await getGroupStats();
                setGroup(g);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [user]);

    const handleLog = async (success: boolean) => {
        if (!user || !profile) return;
        setLogging(true);
        // Log for Yesterday
        const dateKey = format(subDays(new Date(), 1), 'yyyy-MM-dd');

        try {
            await logDailySleep(user.uid, success, dateKey);
            // Refresh data
            const p = await ensureUserProfile(user);
            setProfile(p);
            const g = await getGroupStats();
            setGroup(g);
        } catch (e) {
            console.error(e);
        } finally {
            setLogging(false);
        }
    };

    if (!isFirebaseConfigured) {
        return (
            <Layout>
                <div className="p-4 bg-yellow-500/10 text-yellow-200 rounded-xl border border-yellow-500/20">
                    Firebase not configured. Please check your .env file.
                </div>
            </Layout>
        );
    }

    if (loading) return <Layout><div className="text-center pt-20 text-slate-500 animate-pulse">Loading pact data...</div></Layout>;

    const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');
    const hasLoggedToday = profile?.lastLogDate === yesterday;

    // Sort group: highest owed first
    const sortedGroup = [...group].sort((a, b) => b.totalOwed - a.totalOwed);
    const totalPool = group.reduce((acc, curr) => acc + curr.totalOwed, 0);

    return (
        <Layout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Hello, {user?.displayName?.split(' ')[0]}
                    </h1>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <span>Target: {profile?.targetTime}</span>
                        <Link to="/onboarding" className="p-1 hover:bg-white/10 rounded-full transition-colors">
                            <Settings className="w-3 h-3" />
                        </Link>
                    </div>
                </div>
                <button
                    onClick={() => auth.signOut()}
                    className="p-2 bg-surface rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Sign Out"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>

            {/* Action Card */}
            {!hasLoggedToday ? (
                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-6 rounded-2xl mb-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-lg font-semibold mb-2">Did you sleep on time?</h2>
                        <p className="text-slate-400 text-sm mb-6">Log for last night ({yesterday})</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleLog(true)}
                                disabled={logging}
                                className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/50 py-3 rounded-xl font-medium transition-all active:scale-95 flex justify-center gap-2"
                            >
                                <CheckCircle2 className="w-5 h-5" /> Yes
                            </button>
                            <button
                                onClick={() => handleLog(false)}
                                disabled={logging}
                                className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/50 py-3 rounded-xl font-medium transition-all active:scale-95 flex justify-center gap-2"
                            >
                                <XCircle className="w-5 h-5" /> No
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-surface/50 border border-white/5 p-6 rounded-2xl mb-8 flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div>
                        <h2 className="text-slate-300 font-medium">Synced for today</h2>
                        <p className="text-slate-500 text-sm">See you tomorrow!</p>
                    </div>
                    <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                </div>
            )}

            {/* Pool Card */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 text-slate-400 mb-2 text-xs uppercase tracking-wider">
                        <DollarSign className="w-4 h-4" />
                        Pool Total
                    </div>
                    <div className="text-3xl font-bold text-white">${totalPool}</div>
                </div>
                <div className="bg-surface p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 text-slate-400 mb-2 text-xs uppercase tracking-wider">
                        <Moon className="w-4 h-4" />
                        Your Misses
                    </div>
                    <div className="text-3xl font-bold text-red-400">{profile?.misses || 0}</div>
                    <div className="text-xs text-red-400/50 mt-1">-${(profile?.misses || 0) * 10}</div>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="space-y-4">
                <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider pl-1">Friend Activity</h3>
                {sortedGroup.map(g => (
                    <div key={g.uid} className="flex items-center justify-between p-4 bg-surface rounded-xl border border-white/5 transition-colors hover:bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden flex-shrink-0">
                                {g.photoURL ? <img src={g.photoURL} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-xs text-slate-300">{g.displayName?.[0]}</div>}
                            </div>
                            <div className="min-w-0">
                                <div className="font-medium text-white truncate max-w-[120px]">{g.uid === user?.uid ? 'You' : (g.displayName || 'Anonymous')}</div>
                                <div className="text-xs text-slate-500">Target: {g.targetTime}</div>
                            </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <div className="text-red-400 font-mono font-medium">-${g.totalOwed}</div>
                            <div className="text-xs text-slate-600">{g.misses} misses</div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};
