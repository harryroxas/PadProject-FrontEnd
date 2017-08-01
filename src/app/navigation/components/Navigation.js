import React, { Component } from 'react';
import { Menu, Segment, Input, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

class Navigation extends Component {
    render() {
        const activeItem = this.props.state.activeTab;

        const style = {
            fontSize: 15,
            fontFamily: 'sans-serif',
        }
        
        return(
            <Segment padded raised clearing inverted color='blue'>
                <Menu secondary fluid inverted style={style}>
                    <Menu.Item as={Link} to='/' active={activeItem==='home'} name='home' onClick={this.props.changeTab} />
                    <Menu.Item as={Link} to='repositories' active={activeItem==='repositories'} name='repositories' onClick={this.props.changeTab} />
                    <Menu.Menu position='right'>
                        <Dropdown item text='User'>
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