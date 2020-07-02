import React, { Component } from 'react';
import { Container, SubContainer} from './styles';

import Post from '../../components/Post';

import firebase from '../../service/fireabase';

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		firebase.app.ref('posts').once('value', (snapshot) => {
			const { posts } = this.state;

			snapshot.forEach((childItem) =>{
				posts.push({
					key: childItem.key,
					author: childItem.val().author,
					description: childItem.val().description,
					image: childItem.val().image,
					title: childItem.val().title,

				});

				this.setState(posts);
			})

			console.log(posts)
		})
	}

	mountPost = () =>{

	}

	render() {

		const {posts} = this.state

		return (
			<Container>
				<SubContainer>
					<Post posts={posts}/>
				</SubContainer>
			</Container>
		)
	}
}
