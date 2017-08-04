import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Home from './components/Home';

class HomeContainer extends Component {
	render() {
		const {repos} = this.props;

    	return (
      		<div>
      			<Home repos={repos}/>
      		</div>
    	);
  	}
}

export default HomeContainer;