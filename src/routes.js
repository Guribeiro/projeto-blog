import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import firebase from './service/firebase';

import Loading from './components/Loading';
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/DashBoard';
import New from './pages/New';


export default class Routes extends Component {

	state = {
		firebaseInitialized: false
	}

	componentDidMount() {

		firebase.handleLogin('gustav@gmail.com','123456');

		firebase.isLogged().then(response => {
			this.setState({ firebaseInitialized: response })

		});

	}

	render() {
		const { firebaseInitialized } = this.state;

		return (
			firebaseInitialized ? (
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/dashboard' component={Dashboard} />
						<Route exact path='/dashboard/new' component={New} />
					</Switch>
				</BrowserRouter>
			) :
				<Loading />
		)
	}
}
