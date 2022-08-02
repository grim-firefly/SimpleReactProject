import React from 'react';
import ButtonStyle from '../../Css/Components/HomeComponent/Buttons.module.css';
import { useSelector, useDispatch , useStore } from 'react-redux';
import { onIncrement, onDecrement, onReset } from '../../Action/CounterAction.js';

const Buttons = (props) => {
	const Dispatch = useDispatch();
	const updateValue = () => {
		switch (props.name) {
			case "Increment":
				Dispatch(onIncrement());
				break;
			case "Decrement":
				Dispatch(onDecrement());
				break;
			case "Reset":
				Dispatch(onReset());
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