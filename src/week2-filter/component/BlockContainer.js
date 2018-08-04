import React from 'react';
import Block from './Block';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-regular';
import { Col } from 'reactstrap';

import '../style/Block.css';

class BlockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allsite: [],
    };
  }

  render() {
    const sample = this.props.allSite;
    let block = '';
    if (sample !== undefined) {
      block = sample.map(site => (
        <Block
          name={site.Name} 
          description={site.Description}
          pic={site.Picture1} 
          zone={site.Zone}
          optime={site.Opentime} 
        />
      ));
    }
    return (
      <Col md="8">
        <div className="search-result">
          Showing<span> 15 </span>result by... <br />
          <div className="chosen-tag">
            Entertainment
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </div>
        {block}
      </Col>
    );
  }
}

export default BlockContainer; 
