// bind this function in react's constructor to get access
// to state parameters
export function sendRequest (url, type, body) {
  this.setState({isFetching: true});

  fetch(
    url,
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
