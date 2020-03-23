import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #6a6cb7;
`;

const Ref = styled.a`
	display: flex;
	font-size: 2rem;
	padding: 2rem 2rem;
	color: white;
`

export default function Navbar() {
	return (
		<Header>
			<Ref href="/">Home</Ref>
			<Ref href="/stats">Stats</Ref>
			<Ref href="/news">News</Ref>
			<Ref href="/map">Map</Ref>
		</Header>
	);
}
