import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Repositories from './components/Repositories';

class RepoContainer extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const {match, repos} = this.props;

    	return (
      		<Container>
      			<Repositories
				  	match={match}
      				repos={repos}
      			/>
      		</Container>
    	);
  	}
}

export default RepoContainer;
