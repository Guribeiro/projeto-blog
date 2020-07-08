import React, { Component } from 'react';

import { Container, FormLogin, Input, SendButton } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

import { Link, withRouter } from 'react-router-dom';

class New extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			url_img: '',
			description: '',
		}
	}

	render() {
		const { title, url_img, description } = this.state;
		return (
			<Container>
				<div>
					<Link to='/dashboard'>
						<FiArrowLeft className='icon' />
						Go back
					</Link>
				</div>
				<FormLogin>
					<label htmlFor="title">Title: </label>
					<Input
						type='text'
						placeholder='Awesome title'
						value={title}
						onChange={(e) => this.setState({ title: e.target.value })} />
					<label htmlFor="url-img">Image (URL): </label>
					<Input
						type='text'
						placeholder='Awesome URL'
						value={url_img}
						onChange={(e) => this.setState({ url_img: e.target.value })}
					/>
					<label htmlFor="description">Description: </label>
					<Input
						type='text'
						placeholder='Awesome description'
						value={description}
						onChange={(e) => this.setState({ description: e.target.value })}
					/>
					<SendButton>Send</SendButton>
				</FormLogin>
			</Container>
		)
	}

}

export default withRouter(New);
