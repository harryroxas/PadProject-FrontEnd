import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Advertisement, Segment } from 'semantic-ui-react';
import '../assets/App.css';

import Navigation from './navigation/Navigation';
import NavSidebar from './navigation/Sidebar.js';
import Home from './pages/home/Home';

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
           <Segment padded>
              <Home />
           </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
