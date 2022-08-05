import React from 'react';
import style from './OutlineButton.module.scss';
const OutlineButton = (props) => {

	return (
		<button className={style.btn}>
			<span className={style.btnAnimateTop}></span>
			<span className={style.btnAnimateRight}></span>
			<span className={style.btnAnimateBottom}></span>
			<span className={style.btnAnimateLeft}></span>
			<div className={style.btnText}> {props.name}</div>
		</button>
	);
}
export default OutlineButton;