import React, { Component } from 'react';
import Topbar from './component/Topbar';
import Filter from './component/Filter';

import { Container, Row, Col } from 'reactstrap';

class Week2 extends Component {
  render() {
    return (
      <div className="week2" style={{ backgroundColor: "#F2F2F2" }}>
        <Topbar />

        <Container fluid style={{ padding: '0px', minHeight: window.innerHeight + 'px' }}>
          <Filter />
        </Container>
      </div>
    );
  }
}

export default Week2;
