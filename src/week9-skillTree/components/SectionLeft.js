import React from 'react';
import DialogBlock from './DialogBlock/';
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
      <DialogBlock />
    </div>
  );
}

export default SectionLeft;
