import React from 'react';
import { Row } from 'reactstrap';

import Filter from './Filter';
import BlockContainer from './BlockContainer';

class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSites: [],
    };
  }

  componentDidMount() {
    Promise.resolve(this.getAllSite())
      .then(doc => this.setState({ allSites: doc.result.records }));
  }

  getAllSite() {
    return fetch('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
      .then(res => res.json());
  }

  render() {
    return (
      <Row>
        <Filter />
        <BlockContainer allSite={this.state.allSites} />
      </Row>
    );
  }
}

export default FilterContainer;
