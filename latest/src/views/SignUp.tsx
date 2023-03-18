import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import auth from '../firebase'

// Import the functions you need from the SDKs you ne


export default function Auth() {

  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')

  const signUp = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pw === pw2) {
      createUserWithEmailAndPassword(auth, email, pw)
        .then((creds) => {
          console.log(creds);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return (
    <div>
      <h1>Create account</h1>
      <input
        type="email"
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setPw(e.target.value)}
      />
      <input
        type="password"
        placeholder="verify password..."
        onChange={(e) => setPw2(e.target.value)}
      />
      <button type="submit" onClick={signUp} >Create account</button>
    </div>
  )
}