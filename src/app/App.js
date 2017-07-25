import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Advertisement } from 'semantic-ui-react';
import '../assets/App.css';

import Navigation from './Components/Navigation';
import NavSidebar from './Components/Sidebar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'home',
      sidebar: false,
    };
  }

  changeTab = (e, {name}) => {
    this.setState({activeTab: name})
  };

  toggleSideBar = () => {
    this.setState({sidebar: !this.state.sidebar})
  };

  sidebarClickSidebarMenu = (e, {name}) => {
    this.setState({activeTab: name})
    this.toggleSideBar();
  }

  render() {
    return (
      <div className="App">
        <Sidebar.Pushable>
          <NavSidebar visible={this.state.sidebar} clickSidebar={this.sidebarClickSidebarMenu}/>
          <Sidebar.Pusher>
            <Navigation 
              state={this.state} 
              changeTab={this.changeTab.bind(this)} 
              toggleSideBar={this.toggleSideBar.bind(this)}
            />
            <Advertisement unit='half page' test={this.state.activeTab.toUpperCase()} centered/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
