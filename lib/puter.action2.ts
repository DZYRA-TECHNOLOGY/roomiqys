import puter from '@heyputer/puter.js';

export const signIn = async () => {
    if (!puter?.auth?.signIn) throw new Error("Puter library not initialized");
    return puter.auth.signIn();
};

export const signOut = async () => {
    if (!puter?.auth?.signOut) throw new Error("Puter library not initialized");
    return puter.auth.signOut();
};

export const getCurrentUser = async () => {
    try {
        if (!puter?.auth?.getUser || !(await puter.auth.isSignedIn?.())) return null;
        return puter.auth.getUser();
    } catch {
        return null;
    }
};