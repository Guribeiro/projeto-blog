import React from 'react';

import { PostItem, Title, Image } from './styles';

export default function Post({ posts }) {

	return (
		posts.map((post) => (

			<PostItem key={post.key}>

				<Title>
					{post.title}
					<small>Author: {post.author}</small>
				</Title>
				<Image>
					<img src={post.image} alt="not found"/>
					<figcaption>
						{post.description}
					</figcaption>
				</Image>

			</PostItem>


		))
	)
}
