import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavSidebar extends Component {
    render() {
        const visible = this.props.visible;

        return(
            <Sidebar as={Menu} animation='overlay' width='wide' visible={visible} icon='labeled' vertical >
                <Menu.Item as={Link} to='home' icon='home' name='home' onClick={this.props.clickSidebar} />
                <Menu.Item as={Link} to='repositories' name='repositories' icon='folder' onClick={this.props.clickSidebar} />
            </Sidebar>
        );
    }
}

export default NavSidebar;