import React, { Component } from 'react';

import Login from './Login';

class LoginContainer extends Component {
	constructor(){
		super();
		this.state = {
			newEmail: '',
			newPassword: ''
		};
	}

	onChangeEmail = e => {
		this.setState({
			newEmail: e.target.value
		});
	};

	onChangePassword = e => {
		this.setState({
			newPassword: e.target.value
		});
	};

	render() {
    	return (
      		<div>
        		<Login 
        			email={this.state.newEmail}
        			password={this.state.newPassword}
        			onChangeEmail={this.onChangeEmail.bind(this)}
        			onChangePassword={this.onChangePassword.bind(this)}
        		/>
      		</div>
    	);
  	}
}

export default LoginContainer;
