import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Repositories from './components/Repositories';

class RepoContainer extends Component {
	constructor(){
		super();
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

    	return (
      		<Container text>
      			<Repositories 
      				activeItem={this.state.activeItem}
      				onItemClick={this.onItemClick.bind(this)}
      			/>
      		</Container>
    	);
  	}
}

export default RepoContainer;
