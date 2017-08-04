import React, { Component } from 'react';

import UploadFile from './UploadFile';

class UploadFileContainer extends Component {
  render() {
    const {trigger} = this.props;

    return (
      <div className="App">
        <UploadFile 
          trigger={trigger} 
        />
      </div>
    );
  }
}

export default UploadFileContainer;