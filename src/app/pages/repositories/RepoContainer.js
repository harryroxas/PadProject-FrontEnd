import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Repositories from './components/Repositories';

class RepoContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeItem: 'major'
		};
	}

	onItemClick = (e, {name}) => {
		this.setState({ 
			activeItem: name 
		});
	};

	render() {
		const {repos} = this.props;

    	return (
      		<Container>
      			<Repositories 
      				activeItem={this.state.activeItem}
      				onItemClick={this.onItemClick.bind(this)}
      				repos={repos}
      			/>
      		</Container>
    	);
  	}
}

export default RepoContainer;
