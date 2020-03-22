import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #6a6cb7;
`;

const Link = styled.a`
	display: flex;
	font-size: 2rem;
	padding: 2rem 2rem;
	color: white;
`

export default function Navbar() {
	return (
		<Header>
			<Link href="/">Home</Link>
			<Link href="/stats">Stats</Link>
			<Link href="/news">News</Link>
			<Link href="/map">Map</Link>
		</Header>
	);
}
