import React, { useState } from "react";

const AddEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, dueDate, photo });
    setTitle("");
    setDueDate("");
    setPhoto(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
