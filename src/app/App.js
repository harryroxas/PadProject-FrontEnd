import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { getRepoData } from './utils/api';

import LoginContainer from './pages/login/LoginContainer';
import RepoContainer from './pages/repositories/RepoContainer';
import HomeContainer from './pages/home/HomeContainer';
import NavContainer from './navigation/NavContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      users: [],
    }
  }

  getRepos = () => {
    getRepoData('users').then(
      (repos) => {
        this.setState({repos});
      }
    )
  }

  componentDidMount() {
    this.getRepos();
  }

  render() {
      return (
    	<Router history={withRouter}>
        <div>
          <NavContainer />
              <Route exact path="/" render={() => <LoginContainer />} />
              <Route exact path="/home" render={() => <HomeContainer />} />
              <Route exact path="/repositories" render={() => <RepoContainer />} />
        </div>
	  	</Router>
    );
  }
}

export default App;
