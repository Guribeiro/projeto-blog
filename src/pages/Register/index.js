import React, { Component } from 'react';
import firebase from '../../service/firebase';

import { Container, FormRegister, Input, LoginButton, AlertSpan } from './styles';

export default class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errorPassword: false,

			name: '',
			email: '',
			password: '',

		}
	}

	handleRegister = async (e) => {
		e.preventDefault();
		try {

			const { name, email, password } = this.state;

			if(this.checkPassword(password)){
				firebase.handleStore(name, email, password)
				this.props.history.replace('/dashboard');
			}

		} catch (error) {
			alert(error.message);
		}
	}

	checkPassword = (password) => {

		if (password.length < 6) {
			this.setState({ errorPassword: true });

			return false;
		}
		else{
			return true;
		}

	}


	render() {

		const { errorPassword, name, email, password } = this.state;
		return (
			<Container>

				<FormRegister onSubmit={this.handleRegister}>

					<h3>Register here</h3>

					<label htmlFor="email">Name</label>
					<Input
						type='text'
						value={name}
						onChange={(e) => this.setState({ name: e.target.value })} />

					<label htmlFor="email">Email</label>
					<Input
						type='text'
						value={email}
						autoComplete='off'
						onChange={(e) => this.setState({ email: e.target.value })} />

					<label htmlFor="password">Password</label>
					<Input
						type='password'
						value={password}
						autoComplete='off'
						onChange={(e) => this.setState({ password: e.target.value })}
					/>
					<AlertSpan error={errorPassword}>The password should be at least six characters</AlertSpan>
					<LoginButton type='submit'>Login</LoginButton>

				</FormRegister>
			</Container>
		)
	}
}
