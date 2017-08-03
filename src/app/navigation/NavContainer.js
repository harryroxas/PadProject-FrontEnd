import React, { Component } from 'react';

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
          activeTab={this.state.activeTab} 
          onChangeTab={this.changeTab.bind(this)} 
        />
      </div>
    );
  }
}

export default NavContainer;