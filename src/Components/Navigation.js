import React, { Component } from 'react';
import { Menu, Segment, Input, Dropdown } from 'semantic-ui-react'; 

class Navigation extends Component {
    render() {
        const activeItem = this.props.activeTab;

        return(
            <Segment inverted>
                <Menu inverted pointing secondary fluid>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.props.changeTab} />
                    <Menu.Item name='repositories' active={activeItem === 'repositories'} onClick={this.props.changeTab} />
                    <Menu.Menu>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                        <Dropdown item text='User' onClick={this.props.changeTab}>
                            <Dropdown.Menu>
                            <Dropdown.Item>My Account</Dropdown.Item>
                            <Dropdown.Item>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </Segment>
        );
    }
}

export default Navigation;