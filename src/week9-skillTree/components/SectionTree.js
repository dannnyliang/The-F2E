import React from 'react';
// import TreeCate from './TreeCate';
import TreeCateContainer from '../containers/TreeCateContainer';
import '../styles/sectiontree.css';
import { skillData } from '../skillData';

function SectionTree() {
  const trees = skillData.map((cate, index) =>
    <TreeCateContainer key={index} name={cate.name} cate={cate.subcate} />);
  return (
    <div>
      {trees}
    </div>
  );
}

export default SectionTree;
