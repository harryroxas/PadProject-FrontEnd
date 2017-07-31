import React, { Component } from 'react';

import NavContainer from '../../navigation/NavContainer';
import Home from './components/Home';

class HomeContainer extends Component {
	render() {
    	return (
      		<div>
      			<NavContainer />
      			<Home />
      		</div>
    	);
  	}
}

export default HomeContainer;
