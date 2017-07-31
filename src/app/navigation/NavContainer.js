import React, { Component } from 'react';
import { Menu, Icon, Advertisement } from 'semantic-ui-react';

import Navigation from './components/Navigation';

class NavContainer extends Component {
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

        {this.props.children}
      </div>
    );
  }
}

export default NavContainer;