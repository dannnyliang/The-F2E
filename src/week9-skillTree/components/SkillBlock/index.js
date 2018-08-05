import React from 'react';
import './skillblock.css';

function SkillBlock({ icon, name, recommend, optional, click, focus, complete }) {
  const objToset = complete.map(obj => obj.skill);
  const setC = new Set(objToset);
  return (
    <div
      className={`
        skill-block 
        enable 
        ${focus === name ? 'active' : 'disable'}
      `}
      onClick={() => click(name)}
    >
      <div className="icon">
        <i className="material-icons blockicon">
          {icon}
        </i>
      </div>
      <div className="points">
        <div className="point">
          <i className="material-icons">
            settings
          </i>
          <span> 
            {recommend.filter(skill => setC.has(skill)).length} / 
            {recommend ? recommend.length : 0}
          </span>
        </div>
        <div className="point">
          <i className="material-icons">
            filter_tilt_shift
          </i>
          <span>
            {optional.filter(skill => setC.has(skill)).length} / 
            {optional ? optional.length : 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillBlock;
