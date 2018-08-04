import React from 'react';
import Topbar from './component/Topbar';
import FilterContainer from './component/FilterContainer';

import { Container } from 'reactstrap';

function Week2() {
  return (
    <div className="week2" style={{ backgroundColor: '#F2F2F2' }}>
      <Topbar />

      <Container fluid style={{ padding: '0px', minHeight: `${window.innerHeight}px` }}>
        <FilterContainer />
      </Container>
    </div>
  );
}

export default Week2;
