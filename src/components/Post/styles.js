import styled from 'styled-components';

export const PostItem = styled.div`

	width: 100%;
	max-width: 1024px;

	margin-top: 12px;
	background: #fff;
	border: 1px solid #ddd;

	padding: 12px;

`

export const Title = styled.h1`

	font-size: 1.4rem;
	color: #000;

	display: flex;
	flex-direction: column;

	padding: 6px;

	width: 80%;
	margin: 0 auto 6px;

	small{
		font-size: 0.8rem;
		color: #333;
		margin-top: 6px;
	}

`

export const Image = styled.figure`
	border: 1px solid #ddd;
	margin: 0 auto 6px;

	width: 80%;
	max-width: 1024px;
	padding: 6px;

	img{
		width: 100%;
	}


	figcaption{
		font-size: 0.8rem;
		font-weight: 500;
		color: #333;

		padding: 6px;
	}
`
