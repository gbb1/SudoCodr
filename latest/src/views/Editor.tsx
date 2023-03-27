import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import { AnyArray } from 'mongoose';

export default function Editor() {

  const [lines, setLines] = useState([''])
  const [line, setLine] = useState('');
  const [index, setIndex] = useState(0);

  const [edit, setEdit] = useState(false);

  interface refsObject {
    [index: number]: any;
  }
  const linesRefs = useRef<refsObject>({});

  const divRef = useRef(null);

  const handleKey = (e:any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setEdit(false);

      const id: number = Number(e.target.id);

      if (id in linesRefs.current) {
        setLine(linesRefs.current[id].textContent);
      }
      setIndex(id);

    }

  }

  useEffect(() => {
    if (line.length !== 0) {
      let newLines;
      // console.log('edit', edit);
      if (!edit) {
        newLines = lines.slice(0, index + 1).concat('').concat(lines.slice(index + 1));
      } else {
        newLines = lines.slice(0);
      }
      newLines[index] = line;
      console.log(newLines, index);
      setLines(newLines)
    }
  }, [line])

  useEffect(() => {
    const i = index;

    if (i + 1 in linesRefs.current) {
      linesRefs.current[i + 1].focus();
    }
  }, [lines])

  function blurHandler(e:any) {
    e.preventDefault();
    setEdit(true);

    const id: number = Number(e.target.id);

      if (id in linesRefs.current) {
        setLine(linesRefs.current[id].textContent);
      }
      setIndex(id);
  }


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
            lines.map((l, index:number) => {
              return (
                <div className="flex" key={`input-${index}`}>
                  <div
                    id={`${index}`}
                    ref={(element:any) => linesRefs.current[index] = element} // refsArray.current[index](element)}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    className="p-3 bg-white rounded-md max-w-screen-sm"
                    onChange={(e) => console.log('typing')}
                    onKeyDown={handleKey}
                    onClick={(e) => {setEdit(!edit)}}
                    onBlur={blurHandler}
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