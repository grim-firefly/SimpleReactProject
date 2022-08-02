import React, { useEffect } from 'react';
import OutputStyle from '../../Css/Components/HomeComponent/Output.module.css';
import { useSelector } from 'react-redux';

const Output = () => {

	const CountValue = useSelector(state => state.value);
	return (
		<div>
			<div className={`${OutputStyle.OutputFrame}`}>
				<p className={`${OutputStyle.OutputValue}`}>{CountValue}</p>
			</div>

		</div>
	);

}

export default Output;