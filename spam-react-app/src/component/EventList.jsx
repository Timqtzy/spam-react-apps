import React, { useState } from "react";
import AddEventForm from "./AddEventForm";
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <AddEventForm addEvent={addEvent} />
      <div className="event-list">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
