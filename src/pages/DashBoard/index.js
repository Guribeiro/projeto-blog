import React, { Component } from 'react';

import { Container, WelcomeMessage, Email, SignOut, SubContainer } from './styles';
import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';


import firebase from '../../service/firebase';

export default class Dashboard extends Component {


	constructor(props) {
		super(props);
		this.state = {
			name: '',
		}
	}

	componentDidMount() {
		if (!firebase.getCurrent()) {
			this.props.history.replace('/login');
			return null;
		}

		firebase.getUsername((info) => {
			const { name } = info.val();

			localStorage.setItem(`@blog/name/`, name)

			this.setState({ name: localStorage.getItem(`@blog/name/`) });

		})
	}

	signOut = async () => {
		const { name } = this.state;

		await firebase.handleSignOut()
			.catch((error) => {
				console.log(error)
			});

		localStorage.removeItem(`@blog/name/${name}`)
		this.props.history.push('/');
	}

	render() {
		const { name } = this.state;

		return (
			<Container>
				<WelcomeMessage>
					Bem vindo, {name}
					<Link to='dashboard/new'>
						<FiPlus className='icon' />
					</Link>
				</WelcomeMessage>
				<Email>Logado com: {firebase.getCurrent()}</Email>
				<SubContainer>
					<SignOut onClick={this.signOut}>SignOut</SignOut>
				</SubContainer>
			</Container>


		)
	}
}
