import React,{ useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import { useDispatch } from 'react-redux';
import moment from 'moment';
import events from './Events/Events';
import * as dates from './utils/Dates';
import _, { set } from 'lodash';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


let allViews = Object.keys(Views).map(k => Views[k])
const localizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

function BasicCalander(props) {
  const [state, setState] = useState({
      events: _.cloneDeep(events),
      dayLayoutAlgorithm: 'no-overlap'
  })
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");
  // const customStyles = {
  //   content : {
  //     top                   : '50%',
  //     left                  : '50%',
  //     right                 : 'auto',
  //     bottom                : 'auto',
  //     marginRight           : '-50%',
  //     transform             : 'translate(-50%, -50%)'
  //   }
  // };
  // let subtitle;
  // const [modalIsOpen,setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  const handleSelect = ({ start, end }) => {
    setIsOpen(true);
    const title = window.prompt('New Event name')
    if (title)
      setState({
        events: [
          ...state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  return (
    <>
      <Calendar
        selectable
        localizer={localizer}
        events={state.events}
        defaultView={Views.WEEK}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelect}
        dayLayoutAlgorithm={state.dayLayoutAlgorithm}
      />

    </>
  )
} 

export default BasicCalander;