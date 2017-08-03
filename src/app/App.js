import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import LoginContainer from './pages/login/LoginContainer';
import RegisterContainer from './pages/register/RegisterContainer';
import RepoContainer from './pages/repositories/RepoContainer';
import HomeContainer from './pages/home/HomeContainer';
import NavContainer from './navigation/NavContainer';

import data from './dummy';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    }
  }

  componentWillMount(){
    const {repos} = this.state;
    repos.push(...data);

    this.setState({repos});
    console.log(this.state.repos);
  }


  render() {
    return (
    	<Router history={withRouter}>
      <div>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <NavContainer />
          <Route exact path="/home" component={HomeContainer} />
          <Route path="/repositories" render={() => <RepoContainer repos={this.state.repos} />} />
        </div>
	  	</Router>
    );
  }
}

export default App;
