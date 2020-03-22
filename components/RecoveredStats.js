import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
`;

const StatBlock = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
	background: #f2f2f2;
	padding: 2rem;
	border-radius: 2rem;
	font-size: 2rem;
	text-align: center;
	margin: 1.2rem;
`;

export default function RecoveredStats({ url }) {
	const { stats, loading, error } = useStats(url);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	if (stats.confirmed && stats.deaths && stats.recovered) {
		return (
			<div>
				<StatGrid>
					<StatBlock>
						<span>Last Updated: {stats.lastUpdate}</span>
					</StatBlock>
					<StatBlock>
						<span>Last Updated: {stats.image}</span>
					</StatBlock>
					<StatBlock>
						<span>Last Updated: {stats.lastUpdate}</span>
					</StatBlock>
					<StatBlock>
						<span>Last Updated: {stats.lastUpdate}</span>
					</StatBlock>
					<StatBlock>
						<span>Last Updated: {stats.lastUpdate}</span>
					</StatBlock>
					<StatBlock>
						<span>Last Updated: {stats.lastUpdate}</span>
					</StatBlock>
				</StatGrid>
				<StatGrid>
					<StatBlock>
						<h3>Confirmed: </h3>
						<span>{stats.confirmed.value}</span>
					</StatBlock>
					<StatBlock>
						<h3>Deaths: </h3>
						<span>{stats.deaths.value}</span>
					</StatBlock>
					<StatBlock>
						<h3>Recovered: </h3>
						<span>{stats.recovered.value}</span>
					</StatBlock>
				</StatGrid>
			</div>
		);
	} else {
		return (
			<StatGrid>
				<StatBlock>
					<h3>Confirmed: </h3>
					<span>Unknown</span>
				</StatBlock>
				<StatBlock>
					<h3>Deaths: </h3>
					<span>Unknown</span>
				</StatBlock>
				<StatBlock>
					<h3>Recovered: </h3>
					<span>Unknown</span>
				</StatBlock>
			</StatGrid>
		);
	}
}
