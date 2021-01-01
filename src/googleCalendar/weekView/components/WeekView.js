import React, {useState, useEffect} from 'react';
import moment from 'moment';
import AddEventModal from './AddEventModal';
import WeekToolbar from './WeekToolbar';
import WeekHeader from './WeekHeader';
import TimeSlotGroup from './TimeSlotGroup';
import {times, getAllDaysInTheWeek} from '../../utils';
import {container} from '../styles';
import { Row, Col} from 'react-bootstrap';

function WeekView(props) {

  const [state, setState] = useState({
    startDate: +moment (),
    weekDays: getAllDaysInTheWeek (),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
  })


  const goToNextWeek = () => {
    const dateAfter7Days = moment (state.startDate).add (7, 'days');
   setState ({
      startDate: +dateAfter7Days,
      weekDays: getAllDaysInTheWeek (dateAfter7Days),
    });
  };


  const goToPreviousWeek = () => {
    const dateBefore7Days = moment (startDate).subtract (7, 'days');
   setState ({
      startDate: +dateBefore7Days,
      weekDays: getAllDaysInTheWeek (dateBefore7Days),
    });
  };


  const goToToday = () => {
   setState ({
      startDate: +moment (),
      weekDays: getAllDaysInTheWeek (),
    });
  };

  const onCurrentEventTimeChange = dates => {
    setState ({
      eventStart: +dates[0],
      eventEnd: +dates[1],
    });
  };

    const {
      weekDays,
      showAddEventModal,
      eventStart,
      eventEnd,
      startDate,
    } =state;

    const {events} = props;
    return (
      <div style={container}>
        <WeekToolbar
          goToPreviousWeek={goToPreviousWeek}
          goToNextWeek={goToNextWeek}
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