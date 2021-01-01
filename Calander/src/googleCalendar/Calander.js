import React, { useState } from 'react';
import WeekView from './weekView';

const Calander = () => {
  const parsedEvent = JSON.parse (localStorage.getItem ('events')) || {};
  const [events, setEvents] = useState(parsedEvent);
  window.addEventListener ('beforeunload', () => {
      localStorage.setItem ('events', JSON.stringify (events));
  });
  return (
      <WeekView events={events} />
    );
  }

export default Calander;
