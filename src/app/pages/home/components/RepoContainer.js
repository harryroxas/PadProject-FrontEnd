import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';

import Repo from './RepoCard';


class RepoContainer extends Component {
    render() {
        const items = [
            {
                subject: 'NASC 5',
                description: 'Environmental Biology(MST)',
                meta: 'Lorenz Matthew Afable',
            },
            {
                subject: 'CMSC 123',
                description: 'Data Structures(CMSC)',
                meta: 'David Benavidez',
            },
            {
                subject: 'NASC 2',
                description: 'Physics in Everyday Life',
                meta: 'Harold Roxas',
            },
        ];

        return(
            <Container fluid>
                <Repo items={items} />
            </Container>
        );
    }
}

export default RepoContainer;