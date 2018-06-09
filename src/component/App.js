import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Links from './Links';

import '../style/App.css';

import Week1 from '../week1-todos/Week1';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path='/' component={Links} />
        <Route path='/week1' component={Week1} />

      </div>
    );
  }
}

export default App;
