import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const GitHubprovider = new GithubAuthProvider();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const signinWithGitHub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GitHubprovider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const createUser = (emai, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, emai, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const uploadNamePhoto = (photo, name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        uploadNamePhoto,
        setLoading,
        signInWithGoogle,
        signinWithGitHub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;