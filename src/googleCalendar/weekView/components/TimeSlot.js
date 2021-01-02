import React,{ useState, useEffect } from 'react';
import {Col, Modal} from 'antd';
import {col, slot, lightHighlighter, buttonStyle, marginButton} from '../styles';
import {isTodaysDate} from '../../utils';
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
import { useForm } from 'react-hook-form';

function TimeSlot (props) {

 const [name , setName] = useState();
 const { register, handleSubmit } = useForm();

 const modalSubmit = () => {
   hideModal();
 } 

 const onSubmit = () => {

 }
 
 const formSubmit = () => {
   console.log();
 }

  const [showModal, hideModal] = useModal(() => (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactModal isOpen ariaHideApp={false}>
        <h4>Event</h4>
        <input 
          ref={register}
          name="eventName" 
          type="text" 
          // onChange={(e) => setName(e.target.value)} 
          style={buttonStyle}
        />
        <button style={marginButton} onClick={modalSubmit}>Ok</button>
        <button onClick={hideModal}>Close</button>
    </ReactModal>
    </form>
  
  ));
    

  return (
    <React.Fragment>
       <Col
        key={props.dateStamp}
        style={
          isTodaysDate (props.dateStamp)
            ? {...col, ...slot, ...lightHighlighter}
            : {...col, ...slot}
        }
      onClick={showModal}
      span={3}
    />
    </React.Fragment>
   );
}

export default TimeSlot;
