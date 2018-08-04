import React from 'react';
import '../styles/sectionleft.css';

function SectionLeft() {
  return (
    <div>
      <div className="section-header">
        FRONT-END SKILL TREE
      </div>

      <div className="current-rank">
        <span>CURRENT RANK</span>
        <div className="rank-name">
          FRONT-END NOOB
        </div>
      </div>

      <div className="ship" />
    </div>
  );
}

export default SectionLeft;
