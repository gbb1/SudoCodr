import React from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

export default function Editor() {
  return (
    <div>
      Where you code out a problem
    </div>
  )
}