import React from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

export default function Editor() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        Where you code out a problem
        <div className="h-auto">
          <textarea id="game-text"
            className="bg-transparent p-3 rounded-md resize-none border-2 h-auto overflow-hidden min-h-10 min-w-min w-auto max-w-100"
            placeholder="Start it up" onChange={(e) => {console.log(e.target.value)}} />
        </div>
      </div>
    </div>
  )
}



/*

 useEffect(() => {
    socket.emit('start-timer-round', lobbyId);

    function handleKey(event) {
      if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        if (!published && sentence.length > 0) {
          publish();
        }
      }
    }

    document.addEventListener('keydown', handleKey);



*/