import React from "react";

export default class Kelvin extends React.Component {
  render() {
    return (
      <div className='ms-5'>
        <h2>Kelvin: {(this.props.degree + 273.15).toFixed(2)}</h2>
      </div>
    );
  }
}
