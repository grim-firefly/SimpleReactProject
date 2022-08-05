import React from 'react';
import style from './Card.module.scss';

const Card = (props) => {
	return (
		<div className={`${style.Card} card`}>
			<div className={`${style.cardImagehead} card-image`}>
				<div className={`${style.cardImgpos}`}>

					<img className={`${style.cardImg} card-img-top`} src={props.imgUrl} alt="pen image" srcSet="" />
				</div>

			</div>
			<div className={`${style.cardContent} card-body`}>
				<p className={`${style.cardheading} card-title`}>{props.title}</p>
				<p className={`${style.carddes} card-text`}>{props.des}</p>
			</div>
		</div>

	);
}
export default Card;