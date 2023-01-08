import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth()


export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
}

export const startLogout = () =>{
    return ()=>{
        return signOut(auth)
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})