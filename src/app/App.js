import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import NavSidebar from './navigation/Sidebar';
import LoginContainer from './pages/LoginContainer';
import RepoContainer from './pages/RepoContainer';
import HomeContainer from './pages/HomeContainer';

class App extends Component {
  render() {
    return (
    	<HashRouter>
			<Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/home" component={HomeContainer} />
        <Route exact path="/repositories" component={RepoContainer} />
			</Switch>
		</HashRouter>
    );
  }
}

export default App;
