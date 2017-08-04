import React, { Component } from 'react';

import Login from './components/Login';
import { login } from '../../api/api';

class LoginContainer extends Component {
	constructor(){
		super();
		this.state = {
			newEmail: '',
			newPassword: ''
		};
	}

	onSubmitLogin = e => {
		e.preventDefault();

		const body = {
			email: this.state.newEmail,
			password: this.state.newPassword
		}

		login(body).then(response => {
			console.log(response);
		})
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
        			onSubmitLogin={this.onSubmitLogin.bind(this)}
        		/>
      		</div>
    	);
  	}
}

export default LoginContainer;
