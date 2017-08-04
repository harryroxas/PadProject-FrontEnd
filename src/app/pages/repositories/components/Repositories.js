import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Menu, Grid } from 'semantic-ui-react';

import SubjCardContainer from './SubjCardContainer'

const Repositories = ({
	match,
	repos
}) => {
	return (
		<div>
			<Grid>
				<Grid.Row />
				<Grid.Row>
        		<Grid.Column stretched width={15}>
          			<Segment>
          				<SubjCardContainer match={match} repos={repos} />
          			</Segment>
        		</Grid.Column>
        		</Grid.Row>
      		</Grid>
		</div>
	);
}

const style = {
	textAlign: 'center'
}

export default Repositories