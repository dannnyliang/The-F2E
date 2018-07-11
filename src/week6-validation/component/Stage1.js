import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form } from 'reactstrap';
import Header from './Header';
import Input from './Input';

function Stage1() {
  return (
    <div>
      <Header title={'Create Account'} subtitle={'Glad to see you here!'} />

      <Col sm={{size: 6, offset: 3}} >
        <Form>
          <label for='Account' >Account</label>
          <Input 
            type={'email'}
            id={'Account'} 
            placeholder={'example@email.com'}
          />
          <label for='password' >password</label>
          <Input 
            type={'password'}
            id={'Password'} 
            placeholder={'●●●●●●●●'}
          />
          <label for='Comfirm Password' >Comfirm Password</label>
          <Input 
            type={'password'}
            id={'Comfirm Password'} 
            placeholder={'●●●●●●●●'}
          />
          <Link to="/week6/stage2">
            <Button color="primary" block >SUBMIT & NEXT</Button>
          </Link>
        </Form>
      </Col>
    </div>
  );
}

export default Stage1;
