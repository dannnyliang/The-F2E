import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form } from 'reactstrap';
import Header from './Header';
import Input from './Input';
import Select from './Select';

function Stage2() {
  return (
    <div>
      <Header title={'General Infomation'} subtitle={'Tell us who you are!'} />

      <Col sm={{size: 6, offset: 3}} >
        <Form>
          <Row>
            <Col sm='6' >
              <label for='name'>Name (optional)</label>
              <Input 
                type={'text'}
                id={'name'} 
                placeholder={'Example Name'}
              />
            </Col>
            <Col sm='6' >
              <label for='phone'>Phone*</label>
              <Input 
                type={'text'}
                id={'phone'} 
                placeholder={'0912 345 678'}
              />
            </Col>
          </Row>

          <label for='birth'>Birth Date (optional)</label>
          <Row>
              <Col sm='4'>
              <Select 
                id={'birth-year'} 
                start={1900}
                end={2018}
                placeholder={'YYYY'} />
              </Col>
              <Col sm='4'>
              <Select 
                id={'birth-month'} 
                start={1}
                end={12}
                placeholder={'MM'} />
              </Col>
              <Col sm='4'>
              <Select 
                id={'birth-month'} 
                start={1}
                end={31}
                placeholder={'DD'} />
              </Col>
          </Row>

          <label for='address'>Address*</label>
          <Row>
            <Col sm='6' >
              <Input
                type={'text'}
                id={'city'}
                placeholder={'City'}
              />
            </Col>
            <Col sm='6' >
              <Input
                type={'text'}
                id={'dist'}
                placeholder={'Dist'}
              />
            </Col>
          </Row>
          <Row>
            <Col sm='12' >
              <Input
                type={'text'}
                id={'ad-detail'}
                placeholder={'Address Detail'}
              />
            </Col>
          </Row>

          <Link to="/week6/stage3">
            <Button color="primary" block >SUBMIT & NEXT</Button>
          </Link>
        </Form>
      </Col>
    </div>
  );
}

export default Stage2;
