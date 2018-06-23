import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    const getCurrentMilliseconds = () => new Date().getTime();
    this.state = {
      from: getCurrentMilliseconds(),
      to: getCurrentMilliseconds()
    };
    this.timerId = setInterval(
      () => this.setState({ to: getCurrentMilliseconds() }),
      1000
    );
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;
    clearInterval(this.timerId);
    const { from } = this.state;
    onUnmount({ millis: new Date().getTime() - from });
  }

  render() {
    const { from, to } = this.state;
    return <span>{Math.round((to - from) / 1000)}</span>;
  }
}

History.propTypes = {
  onUnmount: PropTypes.func.isRequired
};

export default Counter;
