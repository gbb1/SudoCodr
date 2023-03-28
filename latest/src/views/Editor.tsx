import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import { AnyArray } from 'mongoose';

export default function Editor() {

  const [lines, setLines] = useState([''])
  const [linesFull, setLinesFull] = useState([['', 0]]);

  const [line, setLine] = useState('');
  const [index, setIndex] = useState(0);

  const [tabs, setTabs] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);

  interface refsObject {
    [index: number]: any;
  }
  const linesRefs = useRef<refsObject>({});

  // const divRef = useRef(null);

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

    if (e.keyCode === 9) {
      e.preventDefault();
      // console.log('tab');
      if (tabs < 5) {
        setTabs(tabs + 1);
      }
    }

    if (e.keyCode === 9 && e.shiftKey) {
      e.preventDefault();
      if (tabs > 0) {
        setTabs(tabs - 1);
      }
    }

    if (e.keyCode === 8 && e.shiftKey) {
      e.preventDefault();

      if (tabIndex > 0) {
        setDel(true);
      }

    }
  }

  useEffect(() => {
    if (del) {
      let newLines = linesFull.splice(0);

      newLines.splice(tabIndex, 1);
      setLinesFull(newLines);
      setTabIndex(tabIndex - 1);

      delete linesRefs.current[tabIndex];
    }
  }, [del])

  useEffect(() => {
    console.log(linesFull);
  }, [edit]);

  useEffect(() => {
    if (line.length !== 0) {
      let newLines;
      let newFullLines;

      if (!edit) {
        // newLines = lines.slice(0, index + 1).concat('').concat(lines.slice(index + 1));
        newFullLines = linesFull.slice(0, index + 1);
        newFullLines.push(['', tabs]);
        newFullLines = newFullLines.concat(linesFull.slice(index + 1));
        // console.log(newFullLines);
      } else {
        // newLines = lines.slice(0);
        newFullLines = linesFull.slice(0);
      }
      // newLines[index] = line;
      newFullLines[index] = [line, tabs];
      // console.log(newLines, index);
      // setLines(newLines);
      setLinesFull(newFullLines);
    }
  }, [line])

  useEffect(() => {
    const i = index;

    console.log(index);

    if (Number(i + 1) in linesRefs.current && !del) {
      linesRefs.current[i + 1].focus();
      setTabIndex(i + 1);

      // const nextTabs = Number(linesFull[i+1][1]);
      // setTabs(nextTabs);
    } else if (Number(tabIndex) in linesRefs.current && del) {
      linesRefs.current[tabIndex].focus();
      setDel(false);
    }

  }, [linesFull])

  useEffect(() => {
    let tabLines = linesFull.slice(0);
    tabLines[tabIndex][1] = tabs;
    setLinesFull(tabLines);
  }, [tabs])

  function blurHandler(e:any) {
    e.preventDefault();
    setEdit(true);

    const id: number = Number(e.target.id);

    if (id in linesRefs.current) {
      setLine(linesRefs.current[id].textContent);
    }

    if (id in linesRefs.current) {
      setLine(linesRefs.current[id].textContent);
    }

    setIndex(id);
  }

  function clickHandler(e:any) {
    e.preventDefault();
    setEdit(!edit);

    const id = Number(e.target.id);
    const tabCount = Number(linesFull[id][1]);
    setTabs(tabCount);
    setTabIndex(Number(e.target.id));
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 border-2 w-6/12">
        Where you code out a problem
        {/* <div className="h-auto">
          <textarea id="game-text"
            className="bg-white p-3 rounded-md resize-none border-2 h-auto overflow-hidden min-h-10 min-w-min w-auto max-w-100"
            placeholder="Start it up" onChange={(e) => {console.log(e.target.value)}} />
        </div> */}
        <div className="flex flex-col gap-2 border-2">
          {
            linesFull.map((l, index:number) => {
              const indent = 10 * Number(l[1]);
              return (
                <div className="flex border-4" key={`input-${index}`}>
                  <div
                    id={`${index}`}
                    ref={(element:any) => linesRefs.current[index] = element} // refsArray.current[index](element)}
                    contentEditable={true}
                    style={{ marginLeft: `${indent}px` }}
                    suppressContentEditableWarning={true}
                    className="p-3 bg-white rounded-md max-w-full"
                    // onChange={(e) => console.log('typing')}
                    onKeyDown={handleKey}
                    onClick={clickHandler}
                    onBlur={blurHandler}
                    >
                      {l[0]}
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