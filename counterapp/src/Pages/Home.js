import React, { useState } from 'react';
import HomeStyle from '../Css/Pages/Home.module.css';
import Buttons from '../Component/HomeComponent/Buttons';
import Output from '../Component/HomeComponent/Output';
const Home = () => {
	const [value, setValue] = useState(0);
	const onIncrement = () => {
		setValue(value + 1);
	}
	const onDecrement = () => {
		if (value > 0) {
			setValue(value - 1);
		}
	}
	const onReset = () => {
		setValue(0);
	}
	return (
		<div>

			<div className={`${HomeStyle.Home}  `}>
				<img className={HomeStyle.BackgroundImages} src='./assets/images/background.jpg' />
				<div className={`${HomeStyle.OutputPlace}`}>
					<Output value={value} />
				</div>
				<div className={`btn-group ${HomeStyle.Controllers}`}>
					<Buttons name={"Decrement"} onDecrement={onDecrement} />
					<Buttons name={"Reset"} onReset={onReset} />
					<Buttons name={"Increment"} onIncrement={onIncrement} />
				</div>
			</div>
		</div>
	);
}

export default Home;