import React from 'react';
import OutputStyle from '../../Css/Components/HomeComponent/Output.module.css';


const Output = (props) => {
	return (
		<div>
			<div className={`${OutputStyle.OutputFrame}`}>
				<p className={`${OutputStyle.OutputValue}`}>{props.value}</p>
			</div>

		</div>
	);

}

export default Output;