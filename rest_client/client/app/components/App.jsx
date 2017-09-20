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
      },
      signedIn: false,
      isFetching: false
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  sendRequest (type, body) {
    this.setState({isFetching: true});

    fetch(
      '/api/login',
      {
        method: type,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          this.setState({signedIn: data.authenticated, isFetching: false});
        });
      }
    }).catch((err) => {
      console.log('Request Failed', err);
    });
  }

  login () {
    this.sendRequest('POST', JSON.stringify(this.state.form));
  }

  logout () {
    this.sendRequest('DELETE', '');
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
