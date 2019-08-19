import React from "react";
import Btn from "../components/Btn";
import BigNumber from "../components/BigNumber";
import { get, incr } from "../utils/api";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.origin = this.props.origin;
    this.state = {
      count: this.props.initialCount || 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async update() {
    const count = await get(this.origin);
    this.setState({ count: count });
  }

  async componentDidMount() {
    await this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick() {
    this.setState(() => ({
      count: this.state.count + 1
    }));
    incr(this.origin);
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
