import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route,
} from 'react-router-dom';
import { auth } from '../firebaseConfig'

// Import the functions you need from the SDKs you ne


export default function SignUp() {

  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const navigate = useNavigate();

  const signUp = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pw === pw2 && pw.length > 0 && email.length > 0) {
      createUserWithEmailAndPassword(auth, email, pw)
        .then((creds) => {
          // console.log(creds);
          navigate('/')
        })
        .catch((err) => {
          console.log('Error signing up', err);
        })
    }
  }

  return (
    <div className="border-2 flex justify-center">
      <div className="flex flex-col gap-2 justify-center items-center border-2 w-96">
        <h1 className="mt-20 mb-10">Create account</h1>
        <input
          type="email"
          className="input input-bordered w-full max-w-xs"
          placeholder="email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input input-bordered w-full max-w-xs"
          placeholder="password..."
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          type="password"
          className="input input-bordered w-full max-w-xs"
          placeholder="verify password..."
          onChange={(e) => setPw2(e.target.value)}
        />
        <button type="submit" className="btn" onClick={signUp} >Create account</button>
      </div>
    </div>
  )
}