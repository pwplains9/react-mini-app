import Header from '../../components/Header/index.jsx';
import Card from './Card.jsx';

const dataCategory = [
	{
		title: 'Sport',
		length: 20,
		currentAnswers: 20,
		image: 'images/category/sports.svg',
	},
	{
		title: 'History',
		length: 20,
		currentAnswers: 10,
		image: 'images/category/history.svg',
	},
	{
		title: 'Crypto',
		length: 20,
		currentAnswers: 10,
		image: 'images/category/crypto.svg',
	},
	{
		title: 'Flags',
		length: 20,
		currentAnswers: 0,
		image: 'images/category/flags.svg',
	},
	{
		title: 'Films',
		length: 20,
		currentAnswers: 0,
		image: 'images/category/films.svg',
	},
	{
		title: 'Cartoons',
		length: 20,
		currentAnswers: 0,
		image: 'images/category/cartoons.svg',
	},
	{
		title: 'Music',
		length: 20,
		currentAnswers: 15,
		image: 'images/category/music.svg',
	},
	{
		title: 'Math',
		length: 20,
		currentAnswers: 20,
		image: 'images/category/math.svg',
	},{
		title: 'Music',
		length: 20,
		currentAnswers: 15,
		image: 'images/category/music.svg',
	},
	{
		title: 'Math',
		length: 20,
		currentAnswers: 20,
		image: 'images/category/math.svg',
	},
];
const Categories = () => {
	return (
		<>
			<div className="page category">
				<Header/>
				{
					dataCategory.map((item, key) => {
						return (
							<Card key={key} title={item.title} length={item.length} currentAnswers={item.currentAnswers}
								  image={item.image}/>

						);
					})
				}
			</div>
		</>
	);
};

export default Categories;
