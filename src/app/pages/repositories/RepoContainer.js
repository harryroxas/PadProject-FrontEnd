import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Repositories from './components/Repositories';

class RepoContainer extends Component {
	render() {
		const {repos} = this.props;

    	return (
      		<Container>
      			<Repositories
      				repos={repos}
      			/>
      		</Container>
    	);
  	}
}

export default RepoContainer;
