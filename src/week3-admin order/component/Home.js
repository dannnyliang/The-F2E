import React, { Component } from 'react';
import { Container, Row, Col  } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMoneyBill, faHandHoldingUsd, faBoxes, faCaretRight } from '@fortawesome/fontawesome-free-solid'

import Chart from './Chart';
import Transaction from './Transaction';
import HomeOrder from './HomeOrder';
  
import '../style/Home.css'

class Home extends Component {
  render () {
    return (
      <Container>
        <div>
          <div className="d-flex justify-content-between pt-4 align-items-end">
          <div class="area-head">OVERVIEW</div>
          <div>
            2018/6/6
            <FontAwesomeIcon icon={faCaretRight} className="mx-2" />
            2018/6/13
            <select type="select" name="select" className="ml-2">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Montly</option>
              <option>Yearly</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
        <Row className="d-flex justify-content-between">
          <Col className="overview-item area">
            <div>
              <FontAwesomeIcon className="fa-lg mr-2" icon={faHandHoldingUsd} />
              <span>
                TOTAL REVENUE
              </span>
            </div>
              <span className="overview-num arrow-up">54540</span>
          </Col>
            <div style={{ width: "20px" }}></div>
          <Col className="overview-item area">
            <div>
              <FontAwesomeIcon className="fa-lg mr-2" icon={faBoxes} />
              <span>
                TOTAL COST
              </span>
            </div>
              <span className="overview-num arrow-down">12260</span>
          </Col>
            <div style={{ width: "20px" }}></div>
          <Col className="overview-item area">
            <div>
              <FontAwesomeIcon className="fa-lg mr-2" icon={faMoneyBill} />
              <span>
                NET INCOME
              </span>
            </div>
              <span className="overview-num text-blue">41880</span>
          </Col>
        </Row>
        </div>

        <Chart />

        <Row>
          <Transaction />
          <div style={{width:"20px"}}></div>
          <HomeOrder />
        </Row>
        
      </Container>
    )
  }
}

export default Home