import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Topbar.css';

const Topbar = () => (
  <div className="topbar">

    <div className="topbar-options">
      <Link to="/week1">MyTasks</Link>
    </div>
    <div className="topbar-options">
      <Link to="/week1">In Progress</Link>
    </div>
    <div className="topbar-options">
      <Link to="/week1">Completed</Link>
    </div>

  </div>
);

export default Topbar;
