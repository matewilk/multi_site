import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { TextField, RaisedButton } from 'material-ui';

import { sendRequest } from '../helpers/sendRequest';

class LoginForm extends React.Component {
  constructor () {
    super();
    this.state = {
      form: {
        email: '',
        password: ''
      },
      signedIn: false,
      isFetching: false
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    // binded SendRequest to pass this to the scope
    // of the helper function's scope
    this.sendRequest = sendRequest.bind(this);
  }

  login () {
    this.sendRequest(
      '/api/login',
      'POST',
      JSON.stringify(this.state.form)
    );
  }

  logout () {
    this.sendRequest(
      '/api/login',
      'DELETE',
      ''
    );
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
              onClick={this.logout}
              disabled={!this.state.signedIn}
            />
          </Col>
          <Col xs={6}>
            <RaisedButton
              label='Login'
              onClick={this.login}
              disabled={this.state.signedIn}
            />
          </Col>
        </Row>
      </form>
    );
  }
}

export default LoginForm;
