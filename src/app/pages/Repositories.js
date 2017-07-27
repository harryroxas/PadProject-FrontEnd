import React from 'react';
import { Segment, Icon, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const Repositories = () => {
	return (
		<div>
		<Segment raised size='large' style={{fontWeight: 'bold'}}>
			Repositories
			<Icon name='caret down' color='grey'/>
		</Segment>
		<Grid columns={4} style={{marginTop: '52px', marginLeft: '30px'}}>
			<GridRow>
				<GridColumn>
					<Segment raised>
						<Icon name='folder' size='large' />
						Major Subjects
					</Segment>
				</GridColumn>
				<GridColumn>
					<Segment raised>
						<Icon name='folder' size='large'/>
						Electives
					</Segment>
				</GridColumn>
				<GridColumn>
					<Segment raised>
						<Icon name='folder' size='large'/>
						GE Subjects
					</Segment>
				</GridColumn>
			</GridRow>
		</Grid>
		</div>
	);
}

export default Repositories