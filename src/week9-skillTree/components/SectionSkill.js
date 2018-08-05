import React from 'react';
import SkillBottom from './SkillBottom';
import '../styles/sectionskill.css';
import { subcates } from '../skillData';

function SectionSkill({ focus }) {
  const focusSubcate = subcates.find(subcate => subcate.name === focus) || subcates[0];
  return (
    <div>
      <div className="skill-top aligncenter">
        <i className="material-icons blockicon">
          {focusSubcate.icon}
        </i>
        <span>{focusSubcate.name.toUpperCase()}</span>
      </div>

      <div className="skill-bottom aligncenter">
        {
          focusSubcate.recommend.length === 0 ? '' : <SkillBottom type="recommend" skills={focusSubcate.recommend} />
        }
        {
          focusSubcate.optional.length === 0 ? '' : <SkillBottom type="optional" skills={focusSubcate.optional} />
        }
      </div>
    </div>
  );
}

export default SectionSkill;
