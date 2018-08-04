import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Topbar from './component/Topbar';
import Home from './component/Home';
import Order from './component/Order';
import Product from './component/Product';

function Week3() {
  return (
    <div className="week3" style={{ backgroundColor: '#F2F2F2' }}>
      <Topbar />

      <Container fluid style={{ padding: '0px', minHeight: `${window.innerHeight}px` }}>
        <Route exact path="/week3" component={Home} />
        <Route path="/week3/order" component={Order} />
        <Route path="/week3/product" component={Product} />

      </Container>
    </div>
  );
}

export default Week3;
