import Image from '../../components/Ui/Image.jsx';
import {useState} from 'react';
import SvgIcon from '../../components/Ui/Icon.jsx';

const Card = ({
	title = 'Category',
	length = 0,
	currentAnswers = 0,
	image = '',
}) => {
	let [progress] = useState(0);

	progress = currentAnswers * 100 / length;

	return (<>
		<div className=" card">
			<div className="card__title">
				{title}

				{progress === 100 &&    <SvgIcon name={'check'}></SvgIcon>}
			</div>
			<div className="card__length">
				{currentAnswers} / {length}
			</div>
			<div
				className={'card__progress ' + (progress === 0 ? 'card__progress--notLaunch' : progress === 100 ? 'card__progress--compleated' : 'card__progress--active')}>
				<div className="card__progress-title">
					{progress === 0 && <div>
						not launched
					</div>}
					{progress === 100 && <div>
						completed
					</div>}
					{progress > 0 && progress !== 100 && <div>
						in progress
					</div>}
				</div>
				<div className="card__progress-line"><span style={{'width': progress + '%'}}></span></div>
			</div>

			<div className="card__image">
				<Image url={image}/>
			</div>
		</div>
	</>);
};

export default Card;
