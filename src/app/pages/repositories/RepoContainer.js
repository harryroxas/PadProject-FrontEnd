import React, { Component } from 'react';

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
      		<div>
      			<Repositories 
      				activeItem={this.state.activeItem}
      				onItemClick={this.onItemClick.bind(this)}
      			/>
      		</div>
    	);
  	}
}

export default RepoContainer;
