import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardText } from 'material-ui/Card';

import { TextField, RaisedButton } from 'material-ui';

class LoginForm extends React.Component {
  constructor () {
    super();
    this.state = {
      form: {
        email: '',
        password: ''
      }
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login (event) {

  }

  logout (event) {

  }

  onValueChange (event, value) {
    this.state.form[event.target.name] = value;
  }

  render () {
    return (
      <form>
        <Row around='xs'>
          <Col xs>
            <TextField
              hintText='Email'
              name='email'
              onChange={this.onValueChange}
            />
          </Col>
          <Col xs>
            <TextField
              hintText='Password'
              name='password'
              onChange={this.onValueChange}
            />
          </Col>
        </Row>

        <Row between='xs'>
          <Col xs={6}>
            <RaisedButton
              label='Logout'
              onTouchTap={this.logout}
            />
          </Col>
          <Col xs={6}>
            <RaisedButton
              label='Login'
              onTouchTap={this.login}
            />
          </Col>
        </Row>
      </form>
    );
  }
}

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
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
