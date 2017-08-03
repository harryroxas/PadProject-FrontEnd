import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import SubjCard from './SubjCard';

class SubjCardContainer extends Component {

	render() {
		const {repos} = this.props;

    	return (
      		<Card.Group stackable itemsPerRow={2}>
      			{repos.map((repo) => {
      				if(repo.type === this.props.activeItem){
      					return <SubjCard key={repo.id} subjName={repo.subject} description={repo.description}/>
      				}
      			})}
      		</Card.Group>
    	);
  	}
}

export default SubjCardContainer;
