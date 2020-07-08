import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 980px;
	height: 34vh;

	padding: 12px;
	margin: 16px auto;

	border: 2px solid #ddd;
`

export const WelcomeMessage = styled.h1`
	font-size: 1.3rem;
	color: #272727;

	display: flex;
	align-items: center;
	justify-content: space-between;


	a{

		display: flex;
		justify-content: center;
		align-items: center;

		.icon{
			color: #272727;
			font-size: 2rem;
			transition: 0.4s;

			&:hover{
				opacity: 0.8;
			}
		}
	}
`;

export const Email = styled.p`
	font-size: 1rem;
	color: #272727;

`;

export const SubContainer = styled.div`
	width: 25%;
	max-width: 223.5px;
	display: flex;
	justify-content: center;

	margin: 60px auto 0;

`

export const SignOut = styled.button`
	width: 50%;
	max-width: 112px;
	color: #fff;
	font-size: 1rem;
	padding: 8px;
	background:#e74c3c;
	border: none;

	transition: 0.2s;
	cursor: pointer;

	&:active{
		transform: translateY(2px)
	}

`;
