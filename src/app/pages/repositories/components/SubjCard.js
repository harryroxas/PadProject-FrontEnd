import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const SubjCard = ({subscribed, subjName, description}) => {
	return (	
		<Card>
			<Card.Content>
				<Card.Header>{subjName}</Card.Header>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				{
					subscribed ? <Button fluid negative>Unfollow</Button> : <Button fluid primary>Follow</Button>
				}
				<Button fluid positive>Open</Button>
			</Card.Content>
		</Card>
	);
}

export default SubjCard