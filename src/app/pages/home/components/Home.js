import React from 'react';

import SubscribedContainer from './SubscribedContainer';

const Home = ({repos}) => {
	return (
		<div>
			<SubscribedContainer repos={repos}/>
		</div>
	);
}

export default Home