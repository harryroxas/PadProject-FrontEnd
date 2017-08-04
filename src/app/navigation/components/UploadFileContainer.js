import React, { Component } from 'react';

import UploadFile from './UploadFile';

class UploadFileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  onDrop = (files) => {
    this.setState({files});
    if(this.state.files.length) {
      console.log(this.state.files[0])
    }
  }

  render() {
    const {trigger} = this.props;

    return (
      <div className="App">
        <UploadFile 
          trigger={trigger}
          onDrop={this.onDrop}
          files={this.state.files}
        />
      </div>
    );
  }
}

export default UploadFileContainer;