import React, { Component } from 'react'
import Navigation from './Navigation'
import Login from './Login'
import { Container, Row, Col } from 'reactstrap';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <header className="App-header">
           <Container>    
                <Row>
                  <Col sm={{ size: 4, order: 2, offset: 4 }}><Login /></Col>
                </Row>
           </Container>
        </header>
      </div>
    );
  }
}

export default App;
