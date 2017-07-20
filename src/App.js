import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'repositories'
    };
  }

  changeTab = (e, {name}) => {
    this.setState({activeTab: name})
  };

  render() {
    return (
      <div className="App">
        <Navigation activeTab={this.state.activeTab} changeTab={this.changeTab.bind(this)}/>
      </div>
    );
  }
}

export default App;
