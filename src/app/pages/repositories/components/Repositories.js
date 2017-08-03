import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Menu, Grid } from 'semantic-ui-react';

import SubjCardContainer from '../SubjCardContainer'

const Repositories = ({
	activeItem,
	onItemClick,
	repos
}) => {
	return (
		<div>
			<Grid>
				<Grid.Row />
				<Grid.Row>
        		<Grid.Column stretched width={15}>
          			<Segment>
          				<SubjCardContainer repos={repos} activeItem={activeItem} />
          			</Segment>
        		</Grid.Column>
        		</Grid.Row>
      		</Grid>
		</div>
	);
}

export default Repositories