import React, { Component } from "react";

class LikesCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}

export default LikesCount;
