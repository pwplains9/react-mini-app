import Header from '../../components/Header/index.jsx';
import Image from '../../components/Ui/Image.jsx';

const dataLeaderBoard = [{
	image: 'terry.png',
	name: 'Terry',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'monster.png',
	name: 'Monster',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'adrew.png',
	name: 'Adrew',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'dogy.png',
	name: 'Dogy',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'mary.png',
	name: 'Mary',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'strawberry.png',
	name: 'Strawberry',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'catrine.png',
	name: 'Catrine',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'maximiliane.png',
	name: 'Maximiliane',
	points: '10.000',
	league: 'Diamond',
}, {
	image: 'terry.png',
	name: 'Terry',
	points: '10.000',
	league: 'Diamond',
}];
const Home = () => {
	return (<>
			<div className="page home">
				<Header/>
				<div className="home__title">
					Palcoin
					<br/>
					Millionaire
				</div>

				<div className="home__text">
					Collect points and receive Palcoin tokens
				</div>

				<div className="home__subTitle">
					Leaderboard
				</div>

				<div className="home__list">
					<div className="home__list-row home__list-head">
						<div className="home__list-col home__list-col--1">#</div>
						<div className="home__list-col home__list-col--2">Name</div>
						<div className="home__list-col home__list-col--3">Points</div>
						<div className="home__list-col home__list-col--4">League</div>
					</div>
					<div className="home__list-body">
						{dataLeaderBoard.map((leader, key) => {
							return (<div className="home__list-row" key={key}>
									<div className="home__list-col home__list-col--1">{key + 1}</div>
									<div className="home__list-col home__list-col--2">
										<Image url={`images/peoples/${leader.image}`} alt="leader"/>
										{leader.name}
									</div>
									<div className="home__list-col home__list-col--3">{leader.points}</div>
									<div className="home__list-col home__list-col--4">  {leader.league}</div>
								</div>);
						})}
					</div>
				</div>
				<div className="home__button">HOW TO PLAY</div>
			</div>
		</>);
};

export default Home;
