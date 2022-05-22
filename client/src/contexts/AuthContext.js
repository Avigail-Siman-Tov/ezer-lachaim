// import React, { useContext, useState, useEffect } from 'react';
// import { auth } from '../firebase'

// const AuthContext = React.createContext();

// export function useAuth() {
//     return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState();

//     function signup(email, password) {
//         return auth.createUserWithEmailAndPassword(email, password);
//     }

//     useEffect(() => {
//         auth.unsubcribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user);    
//         })
//         return unsubcribe;
//     }, [])
    
//     const value = {
//         currentUser,
//         signup
//     }


//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }