import React from 'react';
import { Segment, Menu, Grid } from 'semantic-ui-react';

const Repositories = ({
	activeItem,
	onItemClick
}) => {
	return (
		<div>
			<Grid>
        		<Grid.Column width={4}>
          			<Menu fluid vertical tabular style={{height:'90vh', textAlign:'center'}}>
			            <Menu.Item name='major' active={activeItem === 'major'} onClick={onItemClick} />
			            <Menu.Item name='general education' active={activeItem === 'general education'} onClick={onItemClick} />
			            <Menu.Item name='electives' active={activeItem === 'electives'} onClick={onItemClick} />
		          	</Menu>
        		</Grid.Column>

        		<Grid.Column stretched width={12}>
          			<Segment>
            			This is a stretched grid column. This segment will always match the tab height
          			</Segment>
        		</Grid.Column>
      		</Grid>
		</div>
	);
}

export default Repositories