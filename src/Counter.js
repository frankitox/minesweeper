import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    const { everySecond } = this.props;
    this.timerId = setInterval(() => everySecond({ milis: 1000 }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.props;
    return <div>{time}</div>;
  }
}

export default Counter;
