import React, { useEffect, useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

import { UserStateContext, AuthContext } from '../Auth/AuthProvider';
import { auth } from '../firebaseConfig';

export default function Library() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // const signUserOut = onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log('logged in still?');
  //   } else {
  //     console.log('logged out');
  //     navigate('/');
  //   }
  // })
  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log('unauthorized');
      navigate('/login');
    }
  });

  const user = useContext(AuthContext);
  console.log(user);

  if (loading) return <div>Loading...</div>

  return (
    <div>
      Your files/past problems
    </div>
  )
}