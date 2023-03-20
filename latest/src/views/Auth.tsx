import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import { auth } from '../firebaseConfig'

// Import the functions you need from the SDKs you ne
// import { userAuth } from '../AuthContext'

export default function Auth() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  // const { createUser } = userAuth()

  const signInWithGoogle = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const signInOrganic = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pw)
      .then((creds) => {
        console.log(creds);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const signUpNav = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/signup')
  }
    // try {
    //   await createUser(email, pw);
    // } catch (err:any) {
    //   console.log(err.message)
    // }



  return (
    <div className="border-2 flex justify-center">
      <div className="flex flex-col gap-2 justify-center items-center border-2 w-96">
        <h1 className="mt-20 mb-10">Log in</h1>
        <input type="email"
          className="input input-bordered w-full max-w-xs"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input input-bordered w-full max-w-xs"
          placeholder="Password..."
          onChange={(e) => setPw(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          onClick={() => {}} >
            Submit
        </button>
        <button
          type="submit"
          className="btn"
          onClick={signInWithGoogle} >
            Sign in with Google
        </button>
        <button
          type="submit"
          className="btn"
          onClick={signUpNav} >
            Sign up
        </button>
      </div>
    </div>
  )
}