import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavContainer from '../navigation/NavContainer';
import RepoContainer from './repositories/RepoContainer';
import HomeContainer from './home/HomeContainer';

class SignedIn extends Component {
	render() {
		const {repos} = this.props;

		return(
			<div>
				<NavContainer />
		        <Route exact path="/" render={() => <HomeContainer repos={repos} />} />
		        <Route path="/home" render={() => <HomeContainer repos={repos} />} />
		        <Route path="/repositories" render={() => <RepoContainer repos={repos} />} />
			</div>
		)
	}
}

export default SignedIn;