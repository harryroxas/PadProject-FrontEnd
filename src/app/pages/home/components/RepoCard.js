import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class RepoCard extends Component {

    render() {
        const {items} = this.props
        return(
            <Card.Group items={items} />
        );
    }
}

export default RepoCard;