import React from 'react';
import { Row, Col } from 'reactstrap';
import SectionLeft from './SectionLeft';
import SectionTree from './SectionTree';
import SectionSkill from './SectionSkill';

function PageContent() {
  return (
    <Row>
      <Col>
        <SectionLeft />
      </Col>
      <Col>
        <SectionTree />
      </Col>
      <Col>
        <SectionSkill />
      </Col>
    </Row>
  );
}

export default PageContent;
