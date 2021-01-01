import React, {Component} from 'react';
import WeekView from './weekView';

class Calander extends Component {
  constructor (props) {
    super (props);

    this.state = {
      events: JSON.parse (localStorage.getItem ('events')) || {},
    };

    window.addEventListener ('beforeunload', () => {
      localStorage.setItem ('events', JSON.stringify (this.state.events));
    });
  }

 render () {
    const {events} = this.state;
    return (
      <WeekView events={events}
      />
    );
  }
}

export default Calander;
