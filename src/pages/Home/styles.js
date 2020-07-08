import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 2rem;
	color: red;
`

export const Container = styled.div`
	width: 100%;
`

export const SubContainer = styled(Container)`
	font-size: 1rem;
	max-width: 1024px;

	margin: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;


	padding: 0 12px;

`

export const Post = styled.section`
	width: 100%;
`;
