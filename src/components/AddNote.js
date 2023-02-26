import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddNote = ({ getValues }) => {
  const [values, setValues] = useState({
    id: "",
    title: "",
    time: "",
    desc: "",
  });

  const history = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteWithId = { ...values, id: Math.random().toString() };
    if (values.title && values.desc) {
      getValues(noteWithId);
      history("/");
    } else {
      alert("Please Add note properly");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add A Note! 🤓</h1>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="time"
        id="time"
        placeholder="Time"
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        id="desc"
        placeholder="Description"
        onChange={handleChange}
      />
      <div className="header">
        <button type="submit" className="btn-primary">
          Add
        </button>
        <Link to="/">
          <button className="btn-secondary">Home</button>
        </Link>
      </div>
    </form>
  );
};

export default AddNote;
