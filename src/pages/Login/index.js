import React, { Component } from 'react';
import { FiUser } from 'react-icons/fi';

import { Link, withRouter } from 'react-router-dom';
import firebase from '../../service/firebase';

import { Container, FormLogin, Input, Logo, LoginButton } from './styles';


class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		}
	}

	componentDidMount() {
		try {

			if (firebase.getCurrent) {
				return this.props.history.replace('/dashboard');
			}
		} catch (error) {
			alert(error)
		}


	}

	handleLogin = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await firebase.handleLogin(email, password).catch((error) => {
				if (error.code) {
					const { message, code } = error;
					alert(`Error: ${code}\nMessage: ${message}`)
				} else {
					this.props.history.replace('/dashboard');
				}
			});

		} catch (error) {
			alert(error.message)
		}
	}


	render() {

		const { email, password } = this.state;
		return (
			<Container>
				<Logo>
					<FiUser className='icon' />
				</Logo>
				<FormLogin onSubmit={this.handleLogin}>
					<label htmlFor="email">Email</label>
					<Input
						id='email'
						placeholder='example@example.com'
						autoFocus
						value={email}
						onChange={(e) => this.setState({ email: e.target.value })}
					/>

					<label htmlFor="password">Password</label>
					<Input
						type='password'
						id='password'
						placeholder='Awesome password here'
						value={password}
						onChange={(e) => this.setState({ password: e.target.value })}
					/>

					<LoginButton type='submit'>Login</LoginButton>
					<Link to='/register'>Don't you have an account yet?</Link>

				</FormLogin>
			</Container>
		)
	}
}

export default withRouter(Login);
