import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import SubjCardContainer from './SubjCardContainer'

const Repositories = ({
	repos
}) => {
	return (
		<div>
			<Grid centered>
				<Grid.Row />
				<Grid.Row>
        		<Grid.Column stretched width={15}>
          			<Segment>
          				<SubjCardContainer repos={repos} />
          			</Segment>
        		</Grid.Column>
        		</Grid.Row>
      		</Grid>
		</div>
	);
}

export default Repositories