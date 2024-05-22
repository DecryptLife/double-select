import React, { Component } from "react";

export default class PureComponent extends Component {
  shouldComponentUpdate(nextState, nextProps) {
    nextState ??= {};
    this.state ??= {};
    nextState ??= {}; // checks if undefined, if yes  then assign an empty objec
    this.props ??= {};

    if (Object.keys(nextProps) !== Object.keys(this.props)) return false;
    if (Object.keys(nextState) !== Object.keys(this.state)) return false;

    const isStateEqual = Object.keys(nextState).every(
      (key) => nextState[key] === this.state[key]
    );

    const isPropsEqual = Object.keys(nextProps).every(
      (key) => nextProps[key] === this.props[key]
    );

    return !(isStateEqual && isPropsEqual);
  }
  render() {
    return <div>PureComponent</div>;
  }
}
