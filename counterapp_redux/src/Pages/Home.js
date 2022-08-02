import React, { useState } from 'react';
import HomeStyle from '../Css/Pages/Home.module.css';
import Buttons from '../Component/HomeComponent/Buttons';
import Output from '../Component/HomeComponent/Output';
const Home = () => {
	return (
		<div>

			<div className={`${HomeStyle.Home}  `}>
				<img className={HomeStyle.BackgroundImages} src='./assets/images/background.jpg' />
				<div className={`${HomeStyle.OutputPlace}`}>
					<Output />
				</div>
				<div className={`btn-group ${HomeStyle.Controllers}`}>
					<Buttons name={"Decrement"}/>
					<Buttons name={"Reset"} />
					<Buttons name={"Increment"} />
				</div>
			</div>
		</div>
	);
}

export default Home;