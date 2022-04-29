import React from "react";
import { Container, Row, Col } from "reactstrap";
import Celcius from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";
import Information from "./components/Information";

class App extends React.Component {
  increase = xdegree => {
    this.setState({ derece: Number(xdegree) + 1 });
  };

  decrease = xdegree => {
    this.setState({ derece: Number(xdegree) - 1 });
  };

  reset = xdegree => {
    this.setState({ derece: 0 });
  };

  constructor(props) {
    super(props);
    this.state = { derece: 0 };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1 className='d-flex justify-content-center'>Hava Nasıl</h1>
            <Information
              degree={this.state.derece}
              increase={this.increase}
              decrease={this.decrease}
              reset={this.reset}
            ></Information>
          </Row>
          <Row>
            <Col xs='4'>
              <Celcius degree={this.state.derece}></Celcius>
            </Col>
            <Col xs='4'>
              <Fahrenheit degree={this.state.derece}></Fahrenheit>
            </Col>
            <Col xs='4'>
              <Kelvin degree={this.state.derece}></Kelvin>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
