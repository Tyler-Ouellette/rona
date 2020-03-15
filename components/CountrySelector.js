import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import Flag from 'react-world-flags'

export default function CountrySelector() {
	const { stats: countries, loading, error } = useStats(
		'https://covid19.mathdro.id/api/countries',
	);
	const [ selectedCountry, setSelectedCountry ] = useState('USA');
	if (loading) return <p>Loading...</p>;
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<div>
			<select style={{ width: '300px', padding: '5px', margin: '10px','font-size':'16px'}}
				onChange={(e) => {
					setSelectedCountry(e.target.value);
				}}>
				{Object.entries(countries.countries).map(([ country, code ]) => (
					<option
						selected={selectedCountry === countries.iso3[code]}
						key={code}
						value={countries.iso3[code]}>
						{country}
					</option>
				))}
			</select>
			<h2>Currently Showing</h2>
			<Flag height="128" title={selectedCountry} alt={selectedCountry} code={selectedCountry} />
			<Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
		</div>
	);
}
