import React from 'react';
import { Row, Col } from 'reactstrap';
import SectionLeft from './SectionLeft';
import SectionTree from './SectionTree';
import SectionSkillContainer from '../containers/SectionSkillContainer';

function PageContent() {
  return (
    <Row>
      <Col xs="4">
        <SectionLeft />
      </Col>
      <Col xs="4">
        <SectionTree />
      </Col>
      <Col xs="4">
        <SectionSkillContainer />
      </Col>
    </Row>
  );
}

export default PageContent;
