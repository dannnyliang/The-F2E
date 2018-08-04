import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid';

import '../style/Page6.css';

const Page6 = () => (
  <div className="page6">

    <div className="goback">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      <span>CCCLOTHES</span>
    </div>

    <div className="session-top">
      <div className="rect-stroke" />
      <div className="rect-fill" />
      <div className="pic" />
      <div className="lgword a">VINTAGE</div>
      <div className="lgword b">DENIM</div>
      <div className="lgword c">90</div>
      <div className="lgword d">TOP</div>
    </div>
    <div className="session-text">
      <div className="smword">PRODUCT DETAILS</div>
      <div className="text-content">
        <div className="lgword">VINTAGE DENIM</div>
        <div className="mdword">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.</div>
        <div />
      </div>
    </div>
    <div className="session-bot" />

  </div>
);

export default Page6;
