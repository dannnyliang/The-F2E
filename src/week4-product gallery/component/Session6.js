import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Session6.css';

const Session6 = () => (
  <div className="session6">

    <div className="rect-stroke" />
    <div className="rect-fill" />
    <div className="lgword title">VINTAGE DENIM</div>
    <span className="lgword num">06</span>
    <Link to="/week4/page6">
      <div className="pic" />
    </Link>
    <div className="smword">Men’s classic</div>

  </div>
);

export default Session6;
