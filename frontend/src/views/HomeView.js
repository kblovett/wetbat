import React from 'react';
import { Col, Row } from 'react-bootstrap';

const HomeView = () => {
  return (
    <div id='home-section'>
      <div className='dark-overlay'>
        <Row
          style={{ minHeight: '700px' }}
          className='text-center justify-content-center align-items-center'
        >
          <Col>
            <h2 className='text-light'>
              Our customers are going places...{' '}
              <em>let's help them get there</em>.
            </h2>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { HomeView };
