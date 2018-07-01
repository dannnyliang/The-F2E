import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Linkgroup from './Linkgroup';

import '../style/App.css';

import Week1 from '../week1-todos/Week1';
import Week2 from '../week2-filter/Week2';
import Week3 from '../week3-admin order/Week3';
import Week4 from '../week4-product gallery/Week4';

class App extends Component {
  render() {
    return (
      <div className="home">

        <Route exact path='/' component={Linkgroup} />
        <Route path='/week1' component={Week1} />
        <Route path='/week2' component={Week2} />
        <Route path='/week3' component={Week3} />
        <Route path='/week4' component={Week4} />

      </div>
    );
  }
}

export default App;
