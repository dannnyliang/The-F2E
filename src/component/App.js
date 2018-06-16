import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Linkgroup from './Linkgroup';

import '../style/App.css';

import Week1 from '../week1-todos/Week1';
import Week2 from '../week2-filter/Week2';

class App extends Component {
  render() {
    return (
      <div>

        <Route exact path='/' component={Linkgroup} />
        <Route path='/week1' component={Week1} />
        <Route path='/week2' component={Week2} />

      </div>
    );
  }
}

export default App;
