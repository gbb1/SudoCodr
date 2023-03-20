import { useState } from 'react'
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Test from './Test'
import Auth from './views/Auth'
import Editor from './views/Editor'
import Library from './views/Library'
import Problems from './views/Problems'
import SignUp from './views/SignUp'
import Navbar from './components/Navbar'

// import AuthRoute from './components/AuthRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/code" element={<Editor />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
