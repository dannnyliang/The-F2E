import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form } from 'reactstrap';
import Header from './Header';

function Stage3() {
  return (
    <div>
      <Header title={'Update Profile Picture'} subtitle={'We wanna know you more!'} />

      <Col sm={{size: 6, offset: 3}} >

      

        <Link to="/week6/stage3">
          <Button color="primary" block >SUBMIT & NEXT</Button>
        </Link>
      </Col>
    </div>
  );
}

export default Stage3;
