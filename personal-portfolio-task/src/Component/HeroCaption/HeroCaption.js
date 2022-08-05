import React from 'react';
import style from './HeroCaption.module.scss';
import background from './Images/backgroundimage.webp';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import OutlineButton from '../Button/OutlineButton';
import SolidButton from '../Button/SolidButton';
const HeroCaption = () => {
	return (
		<Router>		<div className={style.CaptionContainer}>
			<img className={style.HeroCaptionbackground} src={background} alt="backgorund image" sizes="" srcset="" />

			<div className="container">
				<div className="row">
					<div className={`${style.Caption}  col-lg-6 col-md-8 `}>
						<div className={`${style.HeroCaption}`}>
							<div> <h3 className={style.CaptionHeading} >Get Every Single Solutions</h3> </div>
							<div> <h3 className={style.HeroHeading} >I'm MD. Khairul<br /> Hasan Sajid</h3> </div>
							<div> <p className={style.HeroDes}>jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p> </div>
						</div>
						<div className={style.btnGroup}>
							<div className={style.btnGroupElement}><SolidButton name="Learn More" /></div>
							<div className={style.btnGroupElement}><OutlineButton name={"Hire Me"} /></div>
						</div>
					</div>

				</div>
			</div>
		</div>
		</Router >

	);
}

export default HeroCaption;