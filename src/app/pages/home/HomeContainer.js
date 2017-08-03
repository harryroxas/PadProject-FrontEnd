import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Home from './components/Home';

class HomeContainer extends Component {
	render() {
    	return (
      		<Container>
      			<Home />
      		</Container>
    	);
  	}
}

export default HomeContainer;