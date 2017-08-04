import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import SignedIn from './pages/SignedIn';
import Guest from './pages/Guest';

import subjects from './subjects';
import { getRepoData } from './api/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      isLoggedIn: false,
    }
  }

  componentDidMount(){
    const {repos} = this.state;
    repos.push(...subjects);

    this.setState({repos});
    console.log(this.state.repos);
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
