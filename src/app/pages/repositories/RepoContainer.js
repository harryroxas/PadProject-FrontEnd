import React, { Component } from 'react';

import NavContainer from '../../navigation/NavContainer';
import Repositories from './components/Repositories';

class RepoContainer extends Component {
	render() {
    	return (
      		<div>
      			<Repositories />
      		</div>
    	);
  	}
}

export default RepoContainer;
