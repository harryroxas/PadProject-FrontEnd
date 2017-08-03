import React, { Component } from 'react';

import NavContainer from '../navigation/NavContainer';
import HomeContainer from './home/HomeContainer';

class LoggedIn extends Component {
	render(){
		return(
			<div>
				<NavContainer />
				<HomeContainer />
			</div>
		)
	}
}