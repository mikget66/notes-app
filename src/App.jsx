import React from "react";
import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: '1note text',
      date: 'dd/dd/dddd'
    },
    {
      id: nanoid(),
      text: 'note text',
      date: 'dd/dd/dddd'
    },
    {
      id: nanoid(),
      text: 'note text',
      date: 'dd/dd/dddd'
    },

  ]);
  return (
    <div className="App">
      <div className="container">
        <NotesList notes={notes}/>
      </div>
    </div>
  );
}

export default App;
