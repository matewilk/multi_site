import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardText } from 'material-ui/Card';

import LoginForm from './LoginForm';
import Servers from './Servers';

class App extends React.Component {
  render () {
    return (
      <Grid>
        <Row center='xs'>
          <Col xs={6}>
            <Card>
              <CardText>
                <LoginForm />
              </CardText>
              <CardText>
                <Servers />
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
