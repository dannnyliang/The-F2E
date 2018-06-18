import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCompass, faCalendarAlt } from '@fortawesome/fontawesome-free-regular'


import '../style/Block.css'

const Block = (props) => {
  return(
    <Row className="block">
      <img src={props.pic} alt={props.name} height='220' width='220' />
      <Col>
        <div className="name">
          {props.name}
        </div>
        <div className="description">
          {props.description}
        </div>
        <div className="info">
          <div className="info-item host">
            Herman Cobb
          </div>
          <div className="info-item tag">
            Entertainment
          </div>
        </div>
        <div className="info" >
          <div className="info-item">
            <FontAwesomeIcon icon={faCompass} />
            {props.zone}
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {props.optime}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Block