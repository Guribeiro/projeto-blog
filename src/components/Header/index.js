import React, { Component } from 'react';
import { Container, SubContainer } from './styles';

import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<Container>
				<SubContainer>
					<Link to='/'>
						Blog do programador
					</Link>
					<Link to='/login'>
						Login
					</Link>
				</SubContainer>
			</Container>
		);
	}
}
