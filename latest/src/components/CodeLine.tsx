// import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom/client'
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import {
//   BrowserRouter as Router, Link, Route, Routes,
// } from 'react-router-dom';

// export default function CodeLine() {

//   const [isFocused, setIsFocused] = useState(false);


//   return (
//     <div className="flex" key={`input-${index}`} onClick={setRef}>
//       <div
//         id={`${index}`}
//         ref={divRef}
//         contentEditable={true}
//         suppressContentEditableWarning={true}
//         className="p-3 bg-white rounded-md max-w-screen-sm"
//         onChange={(e) => console.log('typing')}
//         onKeyDown={handleKey}
//         >
//           {l}
//       </div>
//     </div>
//   )
// }


// const [lines, setLines] = useState([''])
// const [line, setLine] = useState('');

// const divRef = useRef(null);

// const handleKey = (e:any) => {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     // Handle the "shift + enter" key press here
//     console.log('Shift + Enter pressed!');
//     if (divRef !== null) {
//       console.log(divRef.current.textContent);
//       setLine(divRef.current.textContent);
//     }

//   }

// }

// useEffect(() => {
//   if (line.length !== 0) {
//     const index = Number(divRef.current.id);

//     let newLines = lines.slice(0, index + 1).concat('').concat(lines.slice(index + 1));
//     newLines[index] = line;
//     console.log(newLines, index);
//     setLines(newLines)
//   }
// }, [line])

// useEffect(() => {
//   divRef.current.focus();
// }, [lines])


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