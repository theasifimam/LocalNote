import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UpdateNote = ({ prevNote, getValues }) => {
  const initialValue = {
    title: prevNote.title,
    time: prevNote.time,
    desc: prevNote.desc,
  };
  const [values, setValues] = useState(initialValue);

  //   const prevNote = notes;
  const history = useNavigate();

  const { pathname } = useLocation();
  const noteId = pathname.slice(13);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteWithId = { ...values, id: noteId };
    if (values.title && values.desc) {
      getValues(noteWithId);
      history("/");
    } else {
      alert("Please Add note properly");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Your Note! 😐</h1>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={handleChange}
        value={values.title}
      />
      <input
        type="datetime-local"
        name="time"
        id="time"
        placeholder="Time"
        onChange={handleChange}
        value={values.time}
      />
      <input
        type="text"
        name="desc"
        id="desc"
        placeholder="Description"
        onChange={handleChange}
        value={values.desc}
      />
      <div className="header">
        <button type="submit" className="btn-primary">
          Update
        </button>
        <Link to="/">
          <button className="btn-secondary">Home</button>
        </Link>
      </div>
    </form>
  );
};

export default UpdateNote;
