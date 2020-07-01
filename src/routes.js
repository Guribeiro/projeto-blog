import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './service/fireabase';

import Loading from './components/Loading';
import Header from './components/Header';

import Home from './pages/Home';


export default class Routes extends Component {

	state = {
		firebaseInitialized: false
	}

	componentDidMount() {
		firebase.isLogged().then(response => {
			this.setState({ firebaseInitialized: response })
		})
	}

	render() {
		const { firebaseInitialized } = this.state;

		return (
			firebaseInitialized ? (
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</BrowserRouter>
			):
			<Loading />
		)
	}
}
