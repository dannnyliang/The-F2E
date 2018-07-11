import React from 'react';
import Session1 from './Session1';
import Session2 from './Session2';
import Session3 from './Session3';
import Session4 from './Session4';
import Session5 from './Session5';
import Session6 from './Session6';
import Session7 from './Session7';

import '../style/Home.css'

const Home = () => {
  return(
    <div className="home">
      <div className="top">
        <div className="logo-wrap">
          <div className="logo">CCCLOTHES</div>
          <div className="logo-word">MEN'S TOPS</div>
        </div>
      </div>

      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Session6 />
      <Session7 />
    </div>
  )
}

export default Home