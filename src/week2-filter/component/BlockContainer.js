import React from 'react';
import Block from './Block';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-regular'
import { Col } from 'reactstrap';

import '../style/Block.css'

class BlockContainer extends React.Component{
  constructor (props) {
    super(props)
    this.state= {
      allsite: []
    }
  }
  
  render () {
    const sample = this.props.allSite[0]
    let block = ''
    if (sample !== undefined){
      block = <Block 
        name={sample.Name} description={sample.Description}
        pic={sample.Picture1} zone={sample.Zone} 
        optime={sample.Opentime} ></Block>
      console.log(sample);

    }
    return (
      <Col md='8'>
        <div className="search-result">
          Showing<span> 15 </span>result by... <br/>
          <div className="chosen-tag">
            Entertainment
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </div>
        {block}
      </Col>
    )
  }
}

export default BlockContainer; 