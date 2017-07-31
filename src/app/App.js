import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import LoginContainer from './pages/login/LoginContainer';
import RepoContainer from './pages/repositories/RepoContainer';
import HomeContainer from './pages/home/HomeContainer';
import NavContainer from './navigation/NavContainer';

class App extends Component {
  render() {
    return (
    	<Router history={withRouter}>
      <div>
      <NavContainer />
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/repositories" component={RepoContainer} />
        </div>
	  	</Router>
    );
  }
}

export default App;
