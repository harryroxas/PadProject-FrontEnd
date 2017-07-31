import React, { Component } from 'react';
import { Menu, Segment, Input, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'; 

class Navigation extends Component {
    render() {
        const activeItem = this.props.state.activeTab;
        
        return(
            <Segment padded raised clearing>
                <Menu pointing secondary fluid>
                    <Menu.Item as={NavLink} to='home' active={activeItem==='home'} name='home' onClick={this.props.changeTab} />
                    <Menu.Item as={NavLink} to='repositories' active={activeItem==='repositories'} name='repositories' onClick={this.props.changeTab} />
                    <Menu.Menu position='right'>
                        <Dropdown name='user' item text='User' onClick={this.props.changeTab}>
                            <Dropdown.Menu>
                                <Dropdown.Item>My Account</Dropdown.Item>
                                <Dropdown.Item>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </Segment>
        );
    }
}

export default Navigation;