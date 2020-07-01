import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: #272727;
`

export const SubContainer = styled(Container)`
	font-size: 1rem;
	max-width: 1024px;

	margin: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	a{
		font-size: 1.2rem;
		text-decoration: none;
		color: #fff;
		padding: 16px 0;
	}

`


