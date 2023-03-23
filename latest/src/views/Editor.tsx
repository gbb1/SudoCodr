import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

export default function Editor() {

  const [lines, setLines] = useState([''])
  const [line, setLine] = useState('');

  const divRef = useRef(null);

  const handleKey = (e:any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // Handle the "shift + enter" key press here
      console.log('Shift + Enter pressed!');
      if (divRef !== null) {
        console.log(divRef.current.textContent);
        setLine(divRef.current.textContent);
      }

    }

  }

  useEffect(() => {
    if (line.length !== 0) {
      const index = Number(divRef.current.id);

      let newLines = lines.slice(0, index + 1).concat('').concat(lines.slice(index + 1));
      newLines[index] = line;
      console.log(newLines, index);
      setLines(newLines)
    }
  }, [line])

  useEffect(() => {
    divRef.current.focus();
  }, [lines])

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        Where you code out a problem
        <div className="h-auto">
          <textarea id="game-text"
            className="bg-white p-3 rounded-md resize-none border-2 h-auto overflow-hidden min-h-10 min-w-min w-auto max-w-100"
            placeholder="Start it up" onChange={(e) => {console.log(e.target.value)}} />
        </div>
        <div className="flex flex-col gap-2">
          {
            lines.map((l, index) => {
              return (
                <div className="flex" key={`input-${index}`}>
                  <div
                    id={`${index}`}
                    ref={divRef}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    className="p-3 bg-white rounded-md max-w-screen-sm"
                    onChange={(e) => console.log('typing')}
                    onKeyDown={handleKey}
                    >
                      {l}
                  </div>
                </div>
              )
            })
          }
          {/* <div contentEditable className="p-3 bg-white rounded-md max-w-screen-sm">
          </div> */}
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