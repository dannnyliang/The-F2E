import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFile, faComment } from '@fortawesome/fontawesome-free-regular';

import '../style/Taskinfo.css';

const Taskinfo = props => (
  <div className="task-bot">
    {props.deadline ? <FontAwesomeIcon icon={faCalendarAlt} color="grey" /> : ''}
    {props.file ? <FontAwesomeIcon icon={faFile} color="grey" /> : ''}
    {props.comment ? <FontAwesomeIcon icon={faComment} color="grey" /> : ''}
  </div>
);

export default Taskinfo;
