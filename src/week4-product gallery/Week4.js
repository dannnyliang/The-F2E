import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './component/Home';
import Page6 from './component/Page6';

import './style/Week4.css'

class Week4 extends Component {
  render() {
    return (
      <div className="week4" style={{ backgroundColor: "#FFFFFF" }}>

        <Container fluid style={{ padding: '0px', minHeight: window.innerHeight + 'px' }}>

          <Route exact path='/week4' component={Home} />
          <Route path='/week4/page6' component={Page6} />

        </Container>
      </div>
    );
  }
}

export default Week4;
