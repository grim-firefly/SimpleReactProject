import React from 'react';
import NavbarStyle from './Navbar.module.scss';
import logo from './Images/logo.webp';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<Router>
			<div>
				<nav className={`container `} >
					<div className={`navbar ${NavbarStyle.navbar} `}>
						<a className="navbar-brand">
							<img src={logo} alt="Portfolio" />
						</a>
						<div className={`${NavbarStyle.navItems}`}>
							<div><Link to="" className={NavbarStyle.navlink}  >Home</Link></div>
							<div><Link to="" className={NavbarStyle.navlink}  >About</Link></div>
							<div><Link to="" className={NavbarStyle.navlink}  >Services</Link></div>
							<div><Link to="" className={NavbarStyle.navlink}  >Portfolio</Link></div>
							<div><Link to="" className={NavbarStyle.navlink}  >Page</Link></div>
							<div><Link to="" className={NavbarStyle.navlink}  >Contact</Link></div>
							<div className={NavbarStyle.navbutton}><a href="#" className={NavbarStyle.navbuttonlink}><span className={NavbarStyle.navbuttontext}>Get Free Consultant</span></a></div>
						</div>
					</div>
				</nav >
			</div>
		</Router>

	);
}
export default Navbar;