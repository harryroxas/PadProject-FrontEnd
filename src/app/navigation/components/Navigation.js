import React from 'react';
import { Menu, Segment, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'; 
import UploadFileContainer from './UploadFileContainer';

const Navigation = ({
    activeTab,
    onChangeTab
}) => {
        return(
            <Segment padded raised clearing>
                <Menu pointing secondary fluid>
                    <Menu.Item as={NavLink} to='home' active={activeTab==='home'} name='home' onClick={onChangeTab} />
                    <Menu.Item as={NavLink} to='repositories' active={activeTab==='repositories'} name='repositories' onClick={onChangeTab} />
                    <Menu.Menu position='right'>
                        <UploadFileContainer trigger={<Menu.Item icon='plus' />} />
                        <Dropdown name='user' item text='User' onClick={onChangeTab}>
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

export default Navigation;