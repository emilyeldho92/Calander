import React,{ useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import { useDispatch } from 'react-redux';
import moment from 'moment';
import events from './Events/Events';
import * as dates from './utils/Dates';
import _, { set } from 'lodash';
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";


let allViews = Object.keys(Views).map(k => Views[k])
const localizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })
  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight : '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

function BasicCalander(props) {
  let subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [state, setState] = useState({
      events: _.cloneDeep([]),
      dayLayoutAlgorithm: 'no-overlap'
  })

  const openModal = () => {
    setIsOpen(true);
  }
 
  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSelect = ({ start, end }) => {
    setIsOpen(true);
    setState({
        events: [
          ...state.events,
          {
            start,
            end
          },
        ],
      })
  }

  const handleSubmit = () => {
    setState({
      events: [
        ...state.events,
        {
          title
        }
          
      ],
    })
    setIsOpen(false);
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
        onSelectEvent={event => alert(title)}
        onSelectSlot={handleSelect}
        dayLayoutAlgorithm={state.dayLayoutAlgorithm}
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 ref={_subtitle => (subtitle = _subtitle)}>Event Name</h4>
          <form>
            <input onChange={(e) => setTitle(e.target.value)} />
          </form>
          <br />
          <button type="button" onClick={handleSubmit}>submit</button> <pr>     </pr>
          <button type="button" onClick={closeModal}>close</button>
      </Modal>
    
    </>
  )
} 

export default BasicCalander;