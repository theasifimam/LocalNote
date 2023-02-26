import React from "react";
import { Link } from "react-router-dom";

const Note = ({ note, deleteNote, updateNote }) => {
  return (
    <div className="note">
      <div>
        <h2>{note.title}</h2>
        <span>{note.time}</span>
      </div>
      <p>{note.desc}</p>
      <div className="header">
        <button className="btn-primary" onClick={() => updateNote(note)}>
          <Link to={`/update-note/${note.id}`}>Update</Link>
        </button>
        <button
          className="btn-secondary"
          onClick={() => {
            deleteNote(note.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
