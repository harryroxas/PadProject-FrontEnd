import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import LoginContainer from './pages/login/LoginContainer';
import RegisterContainer from './pages/register/RegisterContainer';
import RepoContainer from './pages/repositories/RepoContainer';
import HomeContainer from './pages/home/HomeContainer';
import NavContainer from './navigation/NavContainer';

import subjects from './subjects';

import { getUsers } from './api/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      users: []
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
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <NavContainer />
          <Route exact path="/home" component={HomeContainer} />
          <Route path="/repositories" render={(props) => <RepoContainer {...props} repos={this.state.repos} />} />
        </div>
	  	</Router>
    );
  }
}

export default App;
