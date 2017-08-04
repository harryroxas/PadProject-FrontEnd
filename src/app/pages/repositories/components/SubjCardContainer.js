import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import SubjCard from './SubjCard';

class SubjCardContainer extends Component {

	render() {
		const {match, repos} = this.props;

    	return (
			<div>
				<Card.Group stackable itemsPerRow={3}>
					{repos.map((repo, index) => {
						return <SubjCard 
									match={match} 
									key={index} 
									subjName={repo.subject} 
									description={repo.description} 
									path={repo.path}
								/>
					})}
				</Card.Group>

				<Route path={'/:repo'} />
			</div>
    	);
  	}
}

export default SubjCardContainer;
