import { useState } from "react";
import { Link } from "react-router-dom";
import Note from "./Note";

const Notes = ({
  notes,
  deleteNote,
  updateNote,
  handleSearch,
  handleFocus,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    handleSearch(searchValue);
    console.log(searchValue);
  };
  return (
    <div className="container">
      <div className="header">
        <h1>NOTE</h1>
        <div className="searchNote">
          <input
            type="search"
            name="searchInput"
            id="searchInput"
            placeholder="Search note"
            onChange={handleChange}
            onBlur={handleFocus}
            value={searchValue}
          />
        </div>
        <button className="btn-primary">
          <Link to="/add-note">Add</Link>
        </button>
      </div>
      <div className="notesContainer">
        {notes.length === 0 && (
          <div className="noNotes">
            <h1 style={{ color: "grey" }}>No Note Found 🥴</h1>
          </div>
        )}
        {notes.length > 0 &&
          notes.map((note, index) => {
            return (
              <Note
                note={note}
                key={index}
                deleteNote={deleteNote}
                updateNote={updateNote}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
