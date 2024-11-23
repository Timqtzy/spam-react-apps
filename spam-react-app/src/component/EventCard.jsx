import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>Due Date: {event.dueDate}</p>
      {event.photo && (
        <img src={URL.createObjectURL(event.photo)} alt={event.title} />
      )}
    </div>
  );
};

export default EventCard;
