import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Button, Col } from 'reactstrap';

import Stage1 from './component/Stage1';
import Stage2 from './component/Stage2';
import Stage3 from './component/Stage3';
import Header from './component/Header';
import './style/Week6.css'

class Week6 extends Component {
  render() {
    return (
      <div className="week6" style={{backgroundColor: "#fff"}}>
        <Container style={{ 
            minHeight: window.innerHeight + 'px', 
          }}
        >
          <Route exact path='/week6' render={() => 
            <Col sm={{ size: 6, offset: 3 }}>
              <Header title={'F2E Validation'} subtitle={'click button to start'} />
              <Link to="/week6/stage1">
                <Button color="primary" block >Go Sign Up</Button>
              </Link>
            </Col>
          } />
          <Route exact path='/week6/stage1' component={Stage1} />
          <Route exact path='/week6/stage2' component={Stage2} />
          <Route exact path='/week6/stage3' component={Stage3} />
        </Container>
      </div>
    );
  }
}

export default Week6;
