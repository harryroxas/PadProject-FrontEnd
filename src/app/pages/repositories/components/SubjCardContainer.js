import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import SubjCard from './SubjCard';

class SubjCardContainer extends Component {

	render() {
		const {match, repos} = this.props;

    	return (
      		<Card.Group stackable itemsPerRow={3}>
      			{repos.map((repo, index) => { 
              return <SubjCard key={index} subscribed={repo.subscribed} subjName={repo.subject} description={repo.description}/>
      			})}
      		</Card.Group>
    	);
  	}
}

export default SubjCardContainer;
