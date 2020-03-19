import styled from 'styled-components';

const CardContainer = styled.div`
	display: 'flex';
	justify-content: 'center';
	width: '100%';
	text-align: 'center';
`;

export default function Card({ title }) {
	return (
		<CardContainer>
			<h1>The Title is {title}</h1>
			<h2>This can be data?</h2>
		</CardContainer>
	);
}
