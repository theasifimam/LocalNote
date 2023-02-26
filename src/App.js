import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import UpdateNote from "./components/UpdateNote";
import "./styles.css";

// Saving data in localStorage
const notesLocal = JSON.parse(localStorage.getItem("notes") || "[]");

// App Component Starts here
const App = () => {
  const [note, setNote] = useState(notesLocal);
  const [updateValue, setUpdateValue] = useState();

  // Getting values from Add/Update Note and updating array
  const getValues = (values) => {
    const newNotes = note.filter((note) => {
      return note.id !== values.id;
    });
    setNote([...newNotes, values]);
    localStorage.setItem("notes", JSON.stringify([...newNotes, values]));
  };

  // Handling Delete Note event
  const deleteNote = (id) => {
    if (window.confirm("Do You really want to delete this Note?")) {
      const newNotes = note.filter((note) => {
        return note.id !== id;
      });
      setNote(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
    }
  };

  // Previous Note data to update
  const updateNote = (prevNote) => {
    setUpdateValue(prevNote);
  };

  const handleSearch = (value) => {
    const matchingNotes = note.filter((note) => {
      return note.title.match(value) || note.desc.match(value);
    });
    setNote(matchingNotes);
  };

  const handleFocus = (e) => {
    if (e) {
      setNote(notesLocal);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Notes
              notes={note}
              deleteNote={deleteNote}
              updateNote={updateNote}
              handleSearch={handleSearch}
              handleFocus={handleFocus}
            />
          }
          path="/"
        />
        <Route element={<AddNote getValues={getValues} />} path="/add-note" />
        <Route
          element={
            <UpdateNote
              notes={updateNote}
              prevNote={updateValue}
              getValues={getValues}
            />
          }
          path="/update-note/:id"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Dummy Data
// const notes = [
//   {
//     id: "00",
//     title: "Dummy Heading One",
//     desc: "Dummy Description",
//     time: "11:13:53 08/03/23",
//   },
//   {
//     id: "01",
//     title: "Dummy Heading Two",
//     desc: "Dummy Description",
//     time: "11:13:53 08/03/23",
//   },
//   {
//     id: "02",
//     title: "Dummy Heading Three",
//     desc: "Dummy Description",
//     time: "11:13:53 08/03/23",
//   },
// ];
