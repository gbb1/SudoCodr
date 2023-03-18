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
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/library" element={<Library />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/code" element={<Editor />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
