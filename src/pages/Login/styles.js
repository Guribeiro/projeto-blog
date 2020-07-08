import styled from 'styled-components';


export const Container = styled.div`
	padding: 12px;
	margin: 16px auto;
	width: 100%;
	max-width: 680px;
	height: 65vh;

	border: 2px solid #ddd;

	display: flex;
	flex-direction: column;
	align-items: center;


`

export const Logo = styled.figure`
	border: 2px solid #ddd;
	padding: 6px;
	border-radius: 50%;
	margin-top: 16px;

	.icon{
		font-size: 122px;
		color: #272727;

	}
`;

export const FormLogin = styled.form`
	width: 80%;

	label{
		color: #272727;
		display: block;
		font-size: 1.2rem;
		padding: 6px 0;
	}

	a{
		display: block;
		text-align: end;
		font-size: 0.8rem;
		font-weight: 500;
		text-decoration: none;
		color: #272727;

		&:hover{
			text-decoration: underline;
		}
	}
`;

export const Input = styled.input`
	font-size: 1.1rem;
	font-weight: 500;
	width: 100%;
	line-height: 26px;
	padding: 6px 12px;
	border: 1px solid #ddd;
	border-radius: 8px;

	margin-bottom: 22px;

`;

export const LoginButton = styled.button`

	font-size: 1.2rem;
	font-weight: 500;
	text-align: center;
	color: white;
	background: #272727;
	width: 100%;
	padding: 6px;
	line-height: 32px;

	cursor: pointer;

	border-radius: 8px;
	border: none;

	margin: 22px 0 8px;


`;
