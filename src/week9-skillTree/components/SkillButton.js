import React from 'react';

function SkillButton({ type, skill, click, complete }) {
  return (
    <div 
      className={`skill-btn ${complete.filter(i => i.skill === skill).length === 0 ? '' : 'btn-active'}`} 
      onClick={() => click({
        type,
        skill,
      })}
    >
      {skill}
    </div>
  );
}

export default SkillButton;
