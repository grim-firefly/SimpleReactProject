import React, { useEffect } from 'react';
import style from './HeroCaption.module.scss';
import background from './Images/backgroundimage.webp';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import OutlineButton from '../Button/OutlineButton';
import SolidButton from '../Button/SolidButton';
import { wait } from '@testing-library/user-event/dist/utils';
const HeroCaption = () => {
	const Typer = async () => {
		const texts = ["MD. Khairul Hasan Sajid", "Software Engineer", "Web Developer", "Illus1on"];
		let index = 0;
		let cnt = 0;
		let currentText = "";
		let modifiedText = "";
		let deleting = false;
		let typeSpeed = 400;
		let waitnow = false;
		let waitTime = 2000;
		const Type = async () => {
			if (cnt == texts.length) {
				cnt = 0;
			}

			currentText = texts[cnt];
			if (deleting) {
				modifiedText = currentText.substring(0, index - 1);
				index--;
			}
			else {
				modifiedText = currentText.substring(0, index + 1);
				index++;
			}

			document.getElementById("typed").innerHTML = modifiedText;
			if (modifiedText.length == '' && deleting == true) {
				deleting = false;
				cnt++;
			}
			else if (modifiedText.length == currentText.length && deleting == false) {
				deleting = true;
				waitnow = true;

			}
			if (waitnow) {
				waitnow = false;
				await setTimeout(Type, waitTime);
			}
			else {
				setTimeout(Type, deleting ? typeSpeed / 2 : typeSpeed);
			}


		};
		Type();
	}
	useEffect(() => {
		Typer();

	}, []);

	return (
		<Router>		<div className={style.CaptionContainer}>
			<img className={style.HeroCaptionbackground} src={background} alt="backgorund image" sizes="" srcSet="" />

			<div className="container">
				<div className="row">
					<div className={`${style.Caption}  col-lg-6 col-md-8 `}>
						<div className={`${style.HeroCaption}`}>
							<div> <h3 className={style.CaptionHeading} >Get Every Single Solutions</h3> </div>
							<div> <h3 className={style.HeroHeading} >I'm <span id="typed">MD. Khairul Hasan Sajid</span></h3> </div>
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