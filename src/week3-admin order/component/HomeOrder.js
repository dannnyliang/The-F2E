import React from 'react';
import { Col } from 'reactstrap';
import HomeOrderItem from './HomeOrderItem';
import * as fas from '@fortawesome/fontawesome-free-solid';

import '../style/HomeOrder.css';

const HomeOrder = () => (
  <Col className="homeorder area">
    <div class="area-head">Latest Order</div>

    <HomeOrderItem
      clock={fas.faClock}
      person={fas.faMale}
      product={'Vintage T-shirt'}
      buyer={'2018/6/13  13:42'}
      buytime={'Belle Willis'}
      amount={'3200'} 
    />

    <HomeOrderItem
      clock={fas.faClock}
      person={fas.faMale}
      product={'Vintage T-shirt'}
      buyer={'2018/6/13  13:42'}
      buytime={'Belle Willis'}
      amount={'3200'} 
    />

    <HomeOrderItem
      clock={fas.faClock}
      person={fas.faMale}
      product={'Vintage T-shirt'}
      buyer={'2018/6/13  13:42'}
      buytime={'Belle Willis'}
      amount={'3200'} 
    />

    <HomeOrderItem
      clock={fas.faClock}
      person={fas.faMale}
      product={'Vintage T-shirt'}
      buyer={'2018/6/13  13:42'}
      buytime={'Belle Willis'}
      amount={'3200'} 
    />

    <HomeOrderItem
      clock={fas.faClock}
      person={fas.faMale}
      product={'Vintage T-shirt'}
      buyer={'2018/6/13  13:42'}
      buytime={'Belle Willis'}
      amount={'3200'} 
    />
  </Col>
);


export default HomeOrder;
