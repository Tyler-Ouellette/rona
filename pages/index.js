import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-seif;

}
`;

export default function IndexPage() {
	return (
		<div>
			<GlobalStyle />
			<h1>Corona Virus Tracking App</h1>
			<h3>Global Stats</h3>
			<Stats url='https://covid19.mathdro.id/api' />
			<CountrySelector />
		</div>
	);
}
