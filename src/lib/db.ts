import { doc, getDoc, setDoc, updateDoc, collection, serverTimestamp, increment, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import type { User } from 'firebase/auth';
import { type Firestore } from 'firebase/firestore';

export interface UserProfile {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
    targetTime: string;
    misses: number;
    totalOwed: number;
    lastLogDate?: string;
}

export const ensureUserProfile = async (user: User): Promise<UserProfile> => {
    if (!db) throw new Error("Database not initialized");
    const userRef = doc(db as Firestore, 'users', user.uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
        return snap.data() as UserProfile;
    }

    const newProfile: UserProfile = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        targetTime: "23:00",
        misses: 0,
        totalOwed: 0
    };

    await setDoc(userRef, {
        ...newProfile,
        createdAt: serverTimestamp()
    });

    return newProfile;
};

export const updateUserGoal = async (uid: string, time: string) => {
    if (!db) return;
    const userRef = doc(db as Firestore, 'users', uid);
    await updateDoc(userRef, { targetTime: time });
};

export const logDailySleep = async (uid: string, success: boolean, date: string) => {
    if (!db) return;
    const userRef = doc(db as Firestore, 'users', uid);
    const logRef = doc(db as Firestore, 'users', uid, 'logs', date);

    await setDoc(logRef, {
        success,
        date,
        timestamp: serverTimestamp()
    });

    const updates: any = {
        lastLogDate: date
    };

    if (!success) {
        updates.misses = increment(1);
        updates.totalOwed = increment(10);
    }

    await updateDoc(userRef, updates);
};

export const getGroupStats = async (): Promise<UserProfile[]> => {
    if (!db) return [];
    const snap = await getDocs(collection(db as Firestore, 'users'));
    return snap.docs.map(d => d.data() as UserProfile);
};
