import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/fontawesome-free-solid';

import '../style/Taskbutton.css';

function Taskbutton() {
  return (
    <div className="task-edit-button">
      <div className="cancel">
        <FontAwesomeIcon icon={faTimes} color="#D0021B" />
        <span> Cancel</span>
      </div>
      <div className="add">
        <FontAwesomeIcon icon={faPlus} color="#fff" />
        <span> Save</span>
      </div>
    </div>
  );
}

export default Taskbutton;
