import React from 'react';
import { Route } from 'react-router-dom';
import Linkgroup from './Linkgroup';

import '../style/App.css';

import Week1 from '../week1-todos/Week1';
import Week2 from '../week2-filter/Week2';
import Week3 from '../week3-admin order/Week3';
import Week4 from '../week4-product gallery/Week4';
import Week6 from '../week6-validation/Week6';
import Week9 from '../week9-skillTree/';

function App() {
  return (
    <div className="home">
      <Route exact path="/" component={Linkgroup} />
      <Route path="/week1" component={Week1} />
      <Route path="/week2" component={Week2} />
      <Route path="/week3" component={Week3} />
      <Route path="/week4" component={Week4} />
      <Route path="/week6" component={Week6} />
      <Route path="/week9" component={Week9} />

    </div>
  );
}

export default App;
