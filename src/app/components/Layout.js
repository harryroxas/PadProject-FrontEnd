import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Advertisement } from 'semantic-ui-react';

import Navigation from '../navigation/Navigation';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'home',
    };
  }

  changeTab = (e, {name}) => {
    this.setState({activeTab: name})
  };

  render() {
    return (
      <div className="App">
        <Navigation 
          state={this.state} 
          changeTab={this.changeTab.bind(this)} 
        />
      </div>
    );
  }
}

export default Layout;