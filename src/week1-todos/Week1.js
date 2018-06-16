import React, { Component } from 'react';
import Topbar from './component/Topbar';
import Addtask from './component/Addtask';
import Task from './component/Task';

import { Container, Row, Col } from 'reactstrap';

class Week1 extends Component {
  render() {
    return (
      <div className="week1" style={{backgroundColor: "#E1E1E1"}}>
        <Topbar />

        <Container fluid style={{ paddingTop: '24px', minHeight: window.innerHeight + 'px'}}>
          <Row>
            <Col md={{size: 6, offset: 3}} >
              <Addtask />

              <Task />
              <Task />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Week1;
