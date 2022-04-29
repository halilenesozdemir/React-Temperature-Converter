import React from "react";
import { Row, Col, Button } from "reactstrap";

export default class Information extends React.Component {
  render() {
    return (
      <div>
        <h3 className='d-flex justify-content-center mb-4'>
          Şu an sıcaklık: {this.props.degree} derece.
        </h3>
        <Row>
          <Button
            className='d-flex justify-content-center mx-auto align-items-center mb-3'
            color='danger'
            outline
            onClick={() => this.props.increase(this.props.degree)}
          >
            Increase
          </Button>

          <Button
            className='d-flex justify-content-center mx-auto align-items-center mb-3'
            color='danger'
            outline
            onClick={() => this.props.reset(this.props.degree)}
          >
            Reset
          </Button>

          <Button
            className='d-flex justify-content-center mx-auto align-items-center mb-3'
            color='danger'
            outline
            onClick={() => this.props.decrease(this.props.degree)}
          >
            Decrease
          </Button>
        </Row>

        <h4 className='d-flex justify-content-center mt-5 mb-5 text-primary h2'>
          ~Üç Birimde Sıcaklık Ölçümü~
        </h4>
      </div>
    );
  }
}
