import React, {useState, useEffect} from 'react';
import moment from 'moment';
import WeekToolbar from './WeekToolbar';
import WeekHeader from './WeekHeader';
import TimeSlotGroup from './TimeSlotGroup';
import {times, getAllDaysInTheWeek} from '../../utils';
import {container} from '../styles';

function WeekView(props) {

  const [state, setState] = useState({
    startDate: +moment (),
    weekDays: getAllDaysInTheWeek (),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
  })

  const nextWeek = () => {
    const nextdays = moment (state.startDate).add (7, 'days');
   setState ({
      startDate: +nextdays,
      weekDays: getAllDaysInTheWeek (nextdays),
    });
  };

  const previousWeek = () => {
    const previousdays = moment (startDate).subtract (7, 'days');
   setState ({
      startDate: +previousdays,
      weekDays: getAllDaysInTheWeek (previousdays),
    });
  };

  const goToToday = () => {
   setState ({
      startDate: +moment (),
      weekDays: getAllDaysInTheWeek (),
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