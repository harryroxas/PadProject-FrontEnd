import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import LoginContainer from './login/LoginContainer';
import RegisterContainer from './register/RegisterContainer';

class Guest extends Component {
	render() {
		return(
			<Switch>
				<Route exact path="/" component={LoginContainer} />
				<Route exact path="/register" component={RegisterContainer} />

				<Redirect to="/" />
			</Switch>
		)
	}
}

export default Guest;