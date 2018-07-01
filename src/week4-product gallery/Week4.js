import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Session1 from './component/Session1';
import Session2 from './component/Session2';

import './style/Week4.css'

class Week4 extends Component {
  render() {
    return (
      <div className="week4" style={{ backgroundColor: "#FFFFFF" }}>

        <Container fluid style={{ padding: '0px', minHeight: window.innerHeight + 'px' }}>
          <div className="top">
            <div className="logo-wrap">
              <div className="logo">CCCLOTHES</div>
              <div className="logo-word">MEN'S TOPS</div>
            </div>
          </div>

          <Session1 />
          <Session2 />

          <div className="session3">
          session3
          </div>

          <div className="session4">
          session4
          </div>

          <div className="session5">
          session5
          </div>

          <div className="session6">
          session6
          </div>

          <div className="session7">
          session7
          </div>

          
        </Container>
      </div>
    );
  }
}

export default Week4;
