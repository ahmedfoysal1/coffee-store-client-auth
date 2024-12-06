import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../components/firebase/firebase.init";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const AuthInfo = {
        user,
        loading,
        createUser,
        logInUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;