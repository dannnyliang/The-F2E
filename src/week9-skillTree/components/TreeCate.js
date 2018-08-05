import React from 'react';
import { Row, Col } from 'reactstrap';
import SkillBlockContainer from '../containers/SkillBlockContainer';
// import { rankDate } from '../skillData';

function TreeCate({ name, cate }) {
  // const nowPoint = complete.filter(i => i.type === 'recommend').length;
  // console.log(nowPoint);
  // const setC = new Set(complete);
  // console.table(rankDate());
  // let point = 0;
  // console.log(point);
  // console.log(setC);
  const subTree = cate.map((subcate, index) => (
    <SkillBlockContainer
      key={index}
      icon={subcate.icon}
      name={subcate.name}
      recommend={subcate.recommend}
      optional={subcate.optional}
    />)
  );
  return (
    <Row>
      <Col xs="4">
        <div className={`tree ${name}`} />
      </Col>
      <Col xs={{ size: '7', offset: 1 }} >
        <Row>
          {subTree}
        </Row>
      </Col>
    </Row>
  );
}

export default TreeCate;
