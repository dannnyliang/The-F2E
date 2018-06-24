import React from 'react';
import { Col } from 'reactstrap';
import * as fab from '@fortawesome/free-brands-svg-icons';
import * as fas from '@fortawesome/fontawesome-free-solid'
import TransactionItem from './TransactionItem';
import '../style/Transaction.css'

const Transaction = () => {
  return (
    <Col className="trans area">
      <div class="area-head">Transaction Website</div>

      <TransactionItem
        id={'facebook'} 
        brand={fab.faFacebook}
        arrow={fas.faArrowUp}
        description={'Facebook.com'}
        amount={'45836'}
        percent={'20%'} />

      <TransactionItem
        id={'google'} 
        brand={fab.faGoogle}
        arrow={fas.faArrowUp}
        description={'google.com'}
        amount={'23582'}
        percent={'12%'} />

      <TransactionItem
        id={'instagram'} 
        brand={fab.faInstagram}
        arrow={fas.faArrowDown}
        description={'Instagram.com'}
        amount={'2498'}
        percent={'15%'} />

      <TransactionItem
        id={'wordpress'} 
        brand={fab.faWordpress}
        arrow={fas.faArrowDown}
        description={'Wordpress.com'}
        amount={'1057'}
        percent={'30%'} />

    </Col>
  )
}

export default Transaction;