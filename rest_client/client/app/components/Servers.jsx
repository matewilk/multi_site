import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ServerStatus from './ServerStatus';

class Servers extends React.Component {
  render () {
    return (
      <Row between='xs'>
        <Col xs>
          <ServerStatus serverNo='1' />
        </Col>
        <Col xs>
          <ServerStatus serverNo='2' />
        </Col>
      </Row>
    );
  }
}

export default Servers;
