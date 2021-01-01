// import {Row, Col, Button, Icon, Tooltip} from 'antd';

import { Row, Col, Button} from 'react-bootstrap';
import React from 'react';
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons,
} from '../styles';
import moment from 'moment';

function WeekToolbar (props) {
  const formattedDate = moment (props.startDate).format ('MMM YYYY');
  return (
    <Row type="flex" gutter={4} style={toolbar}>
      <Col span={2} style={weekButtons}>
        <Button onClick={props.goToPreviousWeek} style={spacify} icon="left" />
        <Button onClick={props.goToNextWeek} icon="right" />
      </Col>

      <Col span={2} style={toolbarDate}>
        {formattedDate}
      </Col>

    </Row>
  );
}

export default WeekToolbar;
