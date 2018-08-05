import React from 'react';
import PageContent from './components/PageContent';
import { Container } from 'reactstrap';
import './week9.css';

function Week9() {
  return (
    <div className="week9" style={{
      background: 'linear-gradient(to right, #35006A, #000, #35006A)',
      // background: '#fff',
    }}
    >
      <Container style={{
        minHeight: `${window.innerHeight}px`,
        padding: '40px 0',
      }}
      >
        <PageContent />
      </Container>
    </div>
  );
}

export default Week9;
