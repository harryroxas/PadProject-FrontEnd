import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SubjCard = ({match, subjName, description, path}) => {
	return (	
		<Card>
			<Card.Content>
				<Card.Header>{subjName}</Card.Header>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button fluid primary>Follow</Button>
				<Button fluid positive as={NavLink} to={`${match.url}/${path}`}>Open</Button>
			</Card.Content>
		</Card>
	);
}

export default SubjCard;