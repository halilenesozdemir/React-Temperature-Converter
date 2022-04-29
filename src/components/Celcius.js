import React from "react";

export default class Celcius extends React.Component {
  render() {
    return (
      <div className='ms-5'>
        <h2>Celcius: {this.props.degree}</h2>
      </div>
    );
  }
}
