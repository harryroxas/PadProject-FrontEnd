import React, { Component } from 'react';
import { Menu, Segment, Input, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'; 

class Navigation extends Component {
    render() {
        const activeItem = this.props.state.activeTab;
        
        return(
            <Segment textAlign='center' clearing>
                <Menu pointing secondary compact>
                    <Menu.Item active={activeItem==='home'} name='home' onClick={this.props.changeTab} />
                    <Menu.Item active={activeItem==='repositories'} name='repositories' onClick={this.props.changeTab} />
                </Menu>
            </Segment>
        );
    }
}

export default Navigation;