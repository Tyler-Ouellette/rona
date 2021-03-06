import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import Flag from 'react-world-flags';
import styled from 'styled-components';

const Form = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
	background: #4775c9;
	padding: 2rem;
	border-radius: 2rem;
	font-size: 2rem;
	text-align: center;

	select {
		width: 			300px;
		padding: 		5px;
		margin: 		10px;
		font-size: 		16px;
	}
`;

export default function CountrySelector({url}) {
	const { stats: countryData, loading, error } = useStats(url);
	const [ selectedCountry, setSelectedCountry ] = useState('USA');
	if (loading) return <p>Loading...</p>;
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;


	return (
		<div>
			<Form>
				<select>

					onChange={(e) => {
						setSelectedCountry(e.target.value);
					}}>
					{Object.entries(countryData.countries).map(([ country, code ]) =>{
					{console.log( code)}
					return (
						<option
							defaultValue={selectedCountry === code.name}
							key={code}
							value={countryData.iso3}
						>
							{code.name}
						</option>
					)
					}


					)}
				</select>
				<h2>Currently Showing</h2>
				<Flag
					height='128'
					title={selectedCountry}
					alt={selectedCountry}
					code={selectedCountry}
				/>
			</Form>
			<Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
		</div>
	);
}
