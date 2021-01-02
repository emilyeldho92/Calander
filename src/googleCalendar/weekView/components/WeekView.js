import React, {useState, useEffect} from 'react';
import moment from 'moment';
import WeekToolbar from './WeekToolbar';
import WeekHeader from './WeekHeader';
import TimeSlotGroup from './TimeSlotGroup';
import {container} from '../styles';

function WeekView(props) {

  const times = [ 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 ];

  const getWeekDays = (currentDate = moment ()) => {
  const weekStart = currentDate.clone().startOf('week');
  const days = Array.from (Array (7))
    .map ((day, index) => index)
    .map (day =>
      moment (weekStart).add (day, 'days').set ('minutes', 0).set ('seconds', 0)
    )
    .map (momentObj => ({
      date: momentObj.date(),
      dateStamp: momentObj,
      weekDayName: momentObj.format('ddd'),
    }));
    return days;
  };

  const [state, setState] = useState({
    startDate: moment (),
    weekDays: getWeekDays(),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
  })
  

  const nextWeek = () => {
    const nextdays = moment (state.startDate).add(7, 'days');
   setState ({
      startDate: nextdays,
      weekDays: getWeekDays(nextdays),
    });
  };

  const previousWeek = () => {
    const previousdays = moment (startDate).subtract (7, 'days');
   setState ({
      startDate: previousdays,
      weekDays: getWeekDays(previousdays),
    });
  };

  const goToToday = () => {
   setState ({
      startDate: moment(),
      weekDays: getWeekDays(),
    });
  };
  

    const { weekDays, startDate } = state;
    const { events } = props;

    return (
      <div style={container}>
        <WeekToolbar
          previousWeek={previousWeek}
          nextWeek={nextWeek}
          startDate={startDate}
          goToToday={goToToday}
        />

        <WeekHeader weekDays={weekDays} />

        {times.map (time => (
          <TimeSlotGroup
            key={time}
            time={time}
            weekDays={weekDays}
            events={events[time]}
          >
            {events[time] &&
              events[time].map (
                event =>{
                  event.startWeek <= moment (startDate).week () &&
                  event.endWeek >= moment (startDate).week ()
                }
              )}
          </TimeSlotGroup>
        ))}
      </div>
    );
  }

export default WeekView;