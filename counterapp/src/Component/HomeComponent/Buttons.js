import React from 'react';
import ButtonStyle from '../../Css/Components/HomeComponent/Buttons.module.css';


const Buttons = (props) => {
	const updateValue = () => {
		switch (props.name) {
			case "Increment":
				props.onIncrement();
				break;
			case "Decrement":
				props.onDecrement();
				break;
			case "Reset":
				props.onReset();
			default:
		}
	}
	return (
		<div>

			<button onClick={updateValue} className={`${ButtonStyle.MyBtn}`}>
				<span className={ButtonStyle.btnTop}></span>
				<span className={ButtonStyle.btnRight}></span>
				<span className={ButtonStyle.btnBottom}></span>
				<span className={ButtonStyle.btnLeft}></span>
				{props.name}

			</button>
		</div>
	);

}

export default Buttons;