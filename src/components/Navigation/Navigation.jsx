import SvgIcon from '../Ui/Icon.jsx';
import {Link, NavLink, Outlet} from 'react-router-dom';

const dataNavigation = [
	{
		link: '/',
		name: 'Home',
	},
	{
		link: '/categories',
		name: 'Categories',
	},
	{
		link: '/',
		name: 'Tasks',
	},
	{
		link: '/',
		name: 'Leaderboard',
	},
	{
		link: '/',
		name: 'Profile',
	},
];

const Navigation = () => {
	return (
		<>
			<Outlet/>
			<ul className="navigation">
				{
					dataNavigation.map((item, key) => {
						return (
							<li key={key}>
								<NavLink  to={item.link}>
									<SvgIcon name={item.name}></SvgIcon>
									{item.name}
								</NavLink>
							</li>
						);
					})
				}
			</ul>
		</>
	);
};

export default Navigation;
