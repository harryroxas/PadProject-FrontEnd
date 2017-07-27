import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

class NavSidebar extends Component {
    render() {
        const visible = this.props.visible;

        return(
            <Sidebar as={Menu} animation='overlay' width='wide' visible={visible} icon='labeled' vertical >
                <Menu.Item icon='home' name='home' onClick={this.props.clickSidebar} />
                <Menu.Item icon='folder' name='repositories' onClick={this.props.clickSidebar}/>
            </Sidebar>
        );
    }
}

export default NavSidebar;