import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import SignedIn from './pages/SignedIn';
import Guest from './pages/Guest';

import subjects from './subjects';

import { getUsers } from './api/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      isLoggedIn: true
    }
  }

  componentDidMount(){
    const {repos, users} = this.state;
    repos.push(...subjects);

    getUsers().then(userdata => {
      users.push(...userdata.items)
    })

    this.setState({repos, users});
    console.log(this.state)
  }


  render() {
      return (
    	<Router history={withRouter}>
        <div>
          {this.state.isLoggedIn ? <SignedIn repos={this.state.repos} /> : <Guest />}
        </div>
	  	</Router>
    );
  }
}

export default App;
