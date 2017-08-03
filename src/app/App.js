import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import LoggedIn from './pages/LoggedIn';
import AnonUser from './pages/AnonUser';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      isLoggedIn: false
    }
  }

  componentDIdMount(){
    
  }


  render() {
      return (
    	<Router history={withRouter}>
      <div>
          {this.state.isLoggedIn ? <LoggedIn /> : <AnonUser />}
      </div>
	  	</Router>
    );
  }
}

export default App;
