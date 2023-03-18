import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import auth from '../firebase'

// Import the functions you need from the SDKs you ne


export default function Auth() {

  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  const signIn = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pw)
      .then((creds) => {
        console.log(creds);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1>Log in</h1>
        <input type="email"
          className="input w-full max-w-xs"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input w-full max-w-xs"
          placeholder="Password..."
          onChange={(e) => setPw(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          onClick={signIn} >Submit</button>
      </div>
    </div>
  )
}