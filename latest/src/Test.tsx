import React from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

export default function Test() {
  return (
    <div>
      Testing This out
    </div>
  )
}