import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const HomeOrderItem = (props) => {
  const amount = props.amount.replace(/(\d{1,3})(?=(\d{3})+$)/g, function ($1) {
    return $1 = $1 + ','
  })
  return(
    <Row className="homeorderitem pb-1 my-3"> 
      <Col md='3'>
        <img src={`https://fakeimg.pl/100x100/?text=${props.product}`} alt={props.product} />
      </Col>
      <Col>
        <h5 className="font-weight-bold">{props.product}</h5>
        <div className="d-flex justify-content-between align-items-end">

          <div className="text-secondary">
            <div className="my-1">
              <FontAwesomeIcon icon={props.clock} className="mr-2" />
              {props.buytime}
            </div>
            <div className="my-1">
              <FontAwesomeIcon icon={props.person} className="fa-lg homeorderitem-icon"/>
              {props.buyer}
            </div>
          </div>

          <div className="text-right">
            Total
            <h5 className="font-weight-bold">{amount}</h5>
          </div>

        </div>
      </Col>
    </Row>
  )
}

export default HomeOrderItem