import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import NoteContainer from "./../NoteContainer/NoteContainer";
import NoteSidebar from "./../NoteSidebar/NoteSidebar";

import "./NoteMain.css";

function NoteMain(userDetails) {
  const user = userDetails.user;
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Layout user={user}></Layout>
      <div className="layout">
        <h1 className="main_heading">Notes</h1>
        <NoteSidebar addNote={addNote} />
        <NoteContainer
          notes={notes}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
    </div>
  );
}

export default NoteMain;
