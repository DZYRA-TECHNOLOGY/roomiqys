import puter from '@heyputer/puter.js'

// ✅ BENAR: signIn ada di dalam namespace 'auth'
export const signIn = async () => {
    // Pastikan puter sudah terinisialisasi
    if (!puter?.auth?.signIn) {
        throw new Error("Puter library not initialized");
    }
    return await puter.auth.signIn();
};

export const signOut = async () => {
    if (!puter?.auth?.signOut) {
        throw new Error("Puter library not initialized");
    }
    return await puter.auth.signOut();
};

export const getCurrentUser = async () => {
    try {
        // Cek ketersediaan library dulu
        if (!puter?.auth?.getUser) {
            return null;
        }

        // Opsional: Cek dulu apakah user sudah login untuk hindari 401
        const isSignedIn = await puter.auth.isSignedIn?.();
        if (!isSignedIn) return null;

        return await puter.auth.getUser();
    } catch (error) {
        // Error 401/unauthorized adalah wajar jika user belum login
        return null;
    }
};