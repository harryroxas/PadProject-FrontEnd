import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const SubjCard = ({subjName, description}) => {
	return (	
		<Card>
			<Card.Content>
				<Card.Header>{subjName}</Card.Header>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button basic fluid color='blue'>Follow</Button>
			</Card.Content>
		</Card>
	);
}

export default SubjCard