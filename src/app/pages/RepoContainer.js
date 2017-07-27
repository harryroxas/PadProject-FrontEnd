import React, { Component } from 'react';

import Layout from '../components/Layout';
import Repositories from './Repositories';

class RepoContainer extends Component {
	render() {
    	return (
      		<div>
      			<Layout />
      			<Repositories />
      		</div>
    	);
  	}
}

export default RepoContainer;
