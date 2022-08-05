import React from 'react';
import style from './Footer.module.scss';
import Card from '../Card/Card';

const Footer = () => {
	return (
		<div className='container'>
			<div className="row mt-3 mb-5">
				<div className={`${style.footerItem} col-12 col-sm-4`}>
					<Card imgUrl={"https://cdn-icons-png.flaticon.com/512/1160/1160607.png"} title={"UI/UX Design"} des={"Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."} />
				</div>
				<div className={`${style.footerItem} col-12 col-sm-4`}>
					<Card imgUrl={"https://cdn-icons-png.flaticon.com/512/595/595990.png"} title={"Digital Marketing"} des={"Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."} />
				</div>
				<div className={`${style.footerItem} col-12 col-sm-4`}>
					<Card imgUrl={"https://cdn-icons-png.flaticon.com/512/3159/3159301.png"} title={"Web Design"} des={"Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."} />
				</div>
			</div>
		</div>
	)
}
export default Footer;