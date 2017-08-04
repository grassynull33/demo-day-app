import React, { Component } from 'react';
import moment from '../node_modules/moment/min/moment.min';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const now = this.state.date.toLocaleString();
    const then = "08/05/2017, 01:00:00 PM";

    const ms = moment(then).diff(moment(now));
    const d = moment.duration(ms);
    const s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

    return (
      <div className="Clock">
        {this.state.date.toLocaleTimeString()}<br />
        {s}
      </div>
    );
  }
}

export default Clock;