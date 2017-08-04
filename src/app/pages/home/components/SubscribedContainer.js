import React, { Component } from 'react';
import { Segment, Header, Grid, Card, Container } from 'semantic-ui-react';

import SubjCard from '../../repositories/components/SubjCard';

class SubscribedContainer extends Component {

	render() {
		const {repos} = this.props;

    	return (
    		<Container textAlign="justified">
    		<Grid centered>
    			<Grid.Row />
    			<Grid.Row>
    				<Grid.Column width={15}>
	    				<Segment inverted>
	    					<Header>Subscribed Repositories</Header>
	    				</Segment>
    				</Grid.Column>
		    		<Grid.Column width={15}>
			    		<Segment>
				      		<Card.Group stackable itemsPerRow={3}>
				      			{repos.map((repo, index) => {
				            		if(repo.subscribed === true){ return <SubjCard key={index} subscribed={repo.subscribed} subjName={repo.subject} description={repo.description}/> }
				            	})}
				      		</Card.Group>
			      		</Segment>
		      		</Grid.Column>
	      		</Grid.Row>
      		</Grid>
      		</Container>
    	);
  	}
}

export default SubscribedContainer;
