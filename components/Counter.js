import React from "react";
import Btn from "../components/Btn";
import BigNumber from "../components/BigNumber";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({
      count: this.state.count + 1
    }));
  }
  render() {
    return (
      <>
        <Btn onClick={this.handleClick}>Count!</Btn>
        <BigNumber>{this.state.count}</BigNumber>
      </>
    );
  }
}
