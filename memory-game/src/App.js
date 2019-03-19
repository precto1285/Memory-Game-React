import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="text-center bg-primary text-white">
          <h1>Memory Game</h1>
        </Jumbotron>
        <Row>
          <Col className="col-sm-8">

          </Col>
          <Col className="col-sm-4">
          </Col>
        </Row>
        <Jumbotron className="text-center bg-primary text-white">

        </Jumbotron>
      </div>
    );
  }
}

export default App;
