import React, { Component } from 'react';
import { createUser } from '../../api';
import Register from './components/Register';

class RegisterContainer extends Component {
	constructor(){
		super();
		this.state = {
			newFirstName: '',
			newLastName: '',
			newEmail: '',
			newPassword: ''
		};
	}

	onSubmitRegister = e => {
		e.preventDefault();

		const body = {
			firstName: this.state.newFirstName,
			lastName: this.state.newLastName,
			email: this.state.newEmail,
			password: this.state.newPassword
		}

		createUser(body);
	}

	onChangeFirstName = e => {
		this.setState({
			newFirstName: e.target.value
		});
	};

	onChangeLastName = e => {
		this.setState({
			newLastName: e.target.value
		});
	};

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
        		<Register
        			firstName={this.state.newFirstName}
        			lastName={this.state.newLastName} 
        			email={this.state.newEmail}
        			password={this.state.newPassword}
        			onChangeFirstName={this.onChangeFirstName.bind(this)}
        			onChangeLastName={this.onChangeLastName.bind(this)}
        			onChangeEmail={this.onChangeEmail.bind(this)}
        			onChangePassword={this.onChangePassword.bind(this)}
        			onSubmitRegister={this.onSubmitRegister.bind(this)}
        		/>
      		</div>
    	);
  	}
}

export default RegisterContainer;
