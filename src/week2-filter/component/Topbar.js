import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Row, Col, Input } from 'reactstrap';
import '../style/Topbar.css';

const Topbar = () => (
  <Row className="topbar">
    <Col className="logo" md={{ size: 'auto', offset: 1 }} />
    <Col className="search" md={{ size: 'auto', offset: 1 }}>
      <FontAwesomeIcon icon={faSearch} color="white" />
      <Input type="text" className="search-input" placeholder="Explore your own activitices" />
    </Col>
  </Row>
);

export default Topbar;
