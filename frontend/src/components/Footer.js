import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            &copy;<em>Wetbat Travel.</em> All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
