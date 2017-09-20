import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { RaisedButton } from 'material-ui';

import { sendRequest } from '../helpers/sendRequest';

class ServerStatus extends React.Component {
  constructor (props) {
    super(props);
    this.status = {
      signedIn: false,
      isFetching: false
    };

    this.sendRequest = sendRequest.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  checkStatus () {
    this.sendRequest(
      `http://bravura${this.props.serverNo}:4000/api/session`,
      'GET',
    );
  }

  render () {
    return (
      <Card>
        <CardText>
          <div>Bravura {this.props.serverNo}</div>
          <div>SignedIn: {this.status.signedIn ? 'true' : 'false'}</div>
        </CardText>
        <CardActions>
          <RaisedButton
            label='Check Status'
            onClick={this.checkStatus}
          />
        </CardActions>
      </Card>
    );
  }
}

export default ServerStatus;
