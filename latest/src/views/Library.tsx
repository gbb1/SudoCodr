import React from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

export default function Library() {
  return (
    <div>
      Your files/past problems
    </div>
  )
}