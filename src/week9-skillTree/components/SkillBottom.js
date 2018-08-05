import React from 'react';
import SkillButtonContainer from '../containers/SkillButtonContainer';

function SkillBottom({ type, skills }) {
  return (
    <div className="aligncenter">
      <i className="material-icons" >
        {type === 'recommend' ? 'settings' : 'filter_tilt_shift'}
      </i>
      <span>{type}</span>
      {
        skills.map(skill => (
          <SkillButtonContainer type={type} skill={skill} />
        ))
      }
    </div>
  );
}

export default SkillBottom;
