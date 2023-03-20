import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import auth from '../firebase';
import firebase from 'firebase/app';

// export const AuthContext = createContext<firebase.User | null>(null);

// // type UserContextType = any;

// const UserContext = createContext();

// export const AuthContextProvider = ({ children }:any) => {

//   const creatUser = (email:string, password:string) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//   };

//   return (
//     <UserContext.Provider value={createUser}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export const UserAuth = () => {
//   return UserContext(UserContext);
// }