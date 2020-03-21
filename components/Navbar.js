import { render } from 'react-dom';
import styled from 'styled-components';

const Bar = styled.div`
	display: 'flex';
	justify-content: 'center';
	align-items: 'center';
	padding: '10px 10px';
	margin: '5px';
`

export default function Navbar() {
	return (
		<Bar>
			<a href="/">Home</a>
			<a href="/news">News</a>
			<a href="/stats">Stats</a>
			<a href="/map">Map</a>
		</Bar>
	);
}
