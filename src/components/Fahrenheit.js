import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div className='ms-5'>
        <h2>Fahrenheit: {(this.props.degree * 1.8 + 32).toFixed(2)}</h2>
      </div>
    );
  }
}
