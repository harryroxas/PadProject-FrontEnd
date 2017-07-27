import React, { Component } from 'react';

import Layout from '../components/Layout';
import Home from './Home';

class HomeContainer extends Component {
	render() {
    	return (
      		<div>
      			<Layout />
      			<Home />
      		</div>
    	);
  	}
}

export default HomeContainer;
