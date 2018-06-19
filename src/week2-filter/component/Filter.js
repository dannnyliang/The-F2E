import React from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'


import '../style/Filter.css'
import { Col, Label, Input } from 'reactstrap';

class Filter extends React.Component{
  render () {
    return (
      <Col md={{size: 3}} className="filter">
        <div>
          <Label>
            Location
          </Label>
          <Input type='select'>
            <option>Taiwan</option>
            <option>Taiwan</option>
            <option>Taiwan</option>
          </Input>
          <hr/>
        </div>

        <div>
          <Label>
            Date
          </Label>
          <div>
            from
            <Input type='date' />
          </div>
          <div>
            to
            <Input type='date' />
          </div>
          <hr/>
        </div>

        <div>
          <Label>
            Categories
          </Label><br/>
          <Label check>
            <Input type='checkbox' />{' '}
            All<br/>
            <Input type='checkbox' />{' '}
            All<br/>
            <Input type='checkbox' />{' '}
            All<br/>
          </Label>
        </div>
      </Col>
    )
  }
}

export default Filter;