import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginContainer from './login/LoginContainer';
import RegisterContainer from './register/RegisterContainer';

class AnonUser extends Component {
	render() {
		return(
			<div>
				<Switch>
					<Route exact path="/login" component={LoginContainer} />
					<Route exact path="/register" component={RegisterContainer} />

					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}