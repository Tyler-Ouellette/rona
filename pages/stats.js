import ConfirmedStats from '../components/ConfirmedStats';
import RecoveredStats from '../components/RecoveredStats';
import DeathsStats from '../components/DeathsStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import styled from 'styled-components';
import Card from '../components/Card';
import Head from 'next/head'


// const GlobalStyle = createGlobalStyle`
// html {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-seif;

// }
// `;

//https://thevirustracker.com/api

/*  Extra Colour is set
 I like with the https://dt-cdn.net/images/index-header-gradient-30474b72ac.svg
    display: inherit;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-preferred-size: calc(100% - 1.25rem)!important;
    flex-basis: calc(100% - 1.25rem)!important;
    max-width: calc(100% - 1.25rem)!important;
    position: relative;
    padding: 1.5rem;
    overflow: hidden;
    transition: background-color .45s ease;
    transition-property: background-color;
    transition-duration: 0.45s;
    transition-timing-function: ease;
    transition-delay: 0s;
    background: rgba(255,255,255,.03)!important;
    border: 2px solid rgba(255,255,255,.25);
    box-shadow: 0 0 30px 0 rgba(0,0,0,.4);


	.tile-list-hover-effect--arrow .tile:hover {
    background: rgba(255,255,255,.03)!important;
    transform: scale(1.1);
    border: 2px solid #495bc1;
}

.tile-list-hover-effect--arrow .tile {
    min-height: 270px;
    transition: all .45s ease;
    transition-property: all;
    transition-duration: 0.45s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
*/

const GlobalStats = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
	background: #0f1419;
	color: #af2a2a;
	padding: 2rem;
	border-radius: 2rem;
	font-size: 2rem;
    text-align: center;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6a6cb7;
`;

export default function IndexPage() {
	return (
		<div>

			{/* <GlobalStyle /> */}
			<Navbar />
            <Header>
		    	<Card title='Stats' />
			</Header>

            <GlobalStats>
	    		<Card title='Confirmed Detail' />
			</GlobalStats>

            <ConfirmedStats url='https://covid19.mathdro.id/api/confirmed' />

            <GlobalStats>
    			<Card title='Recovered Detail' />
			</GlobalStats>

            <RecoveredStats url='https://covid19.mathdro.id/api/recovered' />

            <GlobalStats>
                <Card title='Deaths Detail' />
            </GlobalStats>

            <DeathsStats url='https://covid19.mathdro.id/api/deaths' />

			<GlobalStats>
				<h3>Global Stats</h3>
			</GlobalStats>
			<Stats url='https://covid19.mathdro.id/api' />
			<CountrySelector />
		</div>
	);
}
