import React from 'react';
import { Segment, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const square = { width: 175, height: 175 }

const Home = () => {
	return (
		<div>
			<Grid columns={3} style={{marginTop: '52px', marginLeft: '180px'}}>
				<GridRow>
					<GridColumn>
						<Segment circular style={square} size='large'>
							<Header>General Education</Header>
						</Segment>
					</GridColumn>
					<GridColumn>
						<Segment circular style={square} size='large'>
							<Header>Major Subjects</Header>
						</Segment>
					</GridColumn>
					<GridColumn>
						<Segment circular style={square} size='large'>
							<Header>Electives</Header>
						</Segment>
					</GridColumn>
				</GridRow>
			</Grid>
		</div>
	);
}

export default Home