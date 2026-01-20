import { doc, getDoc, setDoc, updateDoc, collection, serverTimestamp, increment, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import type { User } from 'firebase/auth';

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
    const userRef = doc(db, 'users', user.uid);
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
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, { targetTime: time });
};

export const logDailySleep = async (uid: string, success: boolean, date: string) => {
    const userRef = doc(db, 'users', uid);
    const logRef = doc(db, 'users', uid, 'logs', date);

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
    const snap = await getDocs(collection(db, 'users'));
    return snap.docs.map(d => d.data() as UserProfile);
};
