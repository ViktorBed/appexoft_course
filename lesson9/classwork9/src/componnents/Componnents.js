import React, { Component } from "react";

export default class Componentt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hellow",
    };
  }
  changeText = () => {
    this.setState({ hello: "Hello Viktor! It's a great night" });
  };
  render() {
    return (
      <div>
        <div>{this.state.hello}</div>
        <button onClick={this.changeText}>Click me to </button>
        <p>{this.props.age}</p>
        <p>{this.props.isFrontendend}</p>
      </div>
    );
  }
}
