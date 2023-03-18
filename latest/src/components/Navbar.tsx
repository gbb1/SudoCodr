import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

import Logo from '../assets/sudocodrLogo.png'

export default function Navbar() {

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="scale-50 bg-#FFAA5C hover:shadow-md">
          <img src={Logo} />
        </div>
        <h1 className="hover:shadow-md">
          sudocodr
        </h1>
      </div>
    </div>
  )
}
