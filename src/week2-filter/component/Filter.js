import React from 'react';

import '../style/Filter.css'
import { Col, Label, Input } from 'reactstrap';

class Filter extends React.Component{
  constructor (props) {
    super(props)
    console.log(this.getAllPark());
  }

  getAllPark() {
  return fetch('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=bf073841-c734-49bf-a97f-3757a6013812')
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
  }

  render () {
    return (
      <Col md={{size: 2, offset: 1}} className="filter">
        <div>
          <Label>
            Location
          </Label>
          <Input type='select'>
            <option>Taiwan</option>
            <option>Taiwan</option>
            <option>Taiwan</option>
          </Input>
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