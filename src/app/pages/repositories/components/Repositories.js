import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Menu, Grid } from 'semantic-ui-react';

import SubjCardContainer from './SubjCardContainer'

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
        		<Grid.Column width={4}>
          			<Menu fluid vertical tabular style={style}>
			            <Menu.Item name='major' active={activeItem === 'major'} onClick={onItemClick}>Major</Menu.Item>
			            <Menu.Item name='ge' active={activeItem === 'ge'} onClick={onItemClick}>General Education</Menu.Item>
			            <Menu.Item name='elective' active={activeItem === 'elective'} onClick={onItemClick}>Electives</Menu.Item>
		          	</Menu>
        		</Grid.Column>

        		<Grid.Column stretched width={10}>
          			<Segment>
          				<SubjCardContainer repos={repos} activeItem={activeItem} />
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