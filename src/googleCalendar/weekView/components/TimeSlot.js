import React from 'react';
import { Row, Col} from 'react-bootstrap';
// import {Col} from 'antd';
import {col, slot, lightHighlighter} from '../styles';
import {isTodaysDate} from '../../utils';

function TimeSlot (props) {
  return (
    <Col
      key={props.dateStamp}
      style={
        isTodaysDate (props.dateStamp)
          ? {...col, ...slot, ...lightHighlighter}
          : {...col, ...slot}
      }
      span={3}
    />
  );
}

export default TimeSlot;
