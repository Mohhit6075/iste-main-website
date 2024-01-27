import React, { useState } from 'react';

import Navlink from './Navlink';
import { Link, useNavigate } from 'react-router-dom';

import ISTElogo from '../../assets/ISTElogo.svg';
import ham from '../../assets/ham.png';
import style from './Navbar.module.css';
import About from '../About/About';
import { CloseOutline } from 'react-ionicons';
const Navbar = (props) => {
	const [mobNav, setMobNav] = useState(false);
	const navigate=useNavigate();

	const hamClickHandler = (event) => {
		event.preventDefault();
		console.log(event.target);
		if (mobNav === true) {
			setMobNav(false);
			
		} else {
			setMobNav(true);
		}
		return `/main-website22${event.target.dest}`;
	};

	const navClickHandler=(event)=>{
		console.log(event.target);
		return event.target.href;
	}
	const show = () => {
		setMobNav(true);
	};
	return (
		<div className={style.navbar}>
			<div className={`${style['logo']} ${mobNav ? style['hide'] : ''}`}>
				<img src={ISTElogo} />
			</div>
			<div className={style['navlinks-container']}>
				<Link
					to="/main-website22"
					style={{ color: 'white', textDecoration: 'none' }}
				>
					Home
				</Link>
				<Navlink onClick={navClickHandler} href="/main-website22#about">About us</Navlink>
				<Navlink onClick={navClickHandler} href="/main-website22#events">Events</Navlink>
				<Navlink onClick={navClickHandler} href="/main-website22#sponsors">Sponsors</Navlink>
				<Navlink>
					<Link
						to="/main-website22/team"
						style={{ color: 'white', textDecoration: 'none' }}
					>
						Our Team
					</Link>
				</Navlink>
				<Navlink href="#footer">Contact Us</Navlink>
			</div>

			<ul
				className={`${style['mobile-navlink-container']} ${
					mobNav ? '' : style['hide']
				}`}
			>
				<div
					className={`${style.ham} ${style['align-left']}`}
					onClick={hamClickHandler}
				>
					<CloseOutline color="white" width="30px" height="30px" />
				</div>
				<Navlink onClick={hamClickHandler}>
					<Link
						to="/main-website22"
						href="/main-website22"
						onFocus={show}
						sx={{ color: 'white', textDecoration: 'none' }}
					>
						Home
					</Link>
				</Navlink>
				<Navlink
					id="#about"
					onClick={hamClickHandler}
					href="/main-website22#about"
					onFocus={show}
				>
					About us
				</Navlink>
				<Navlink
					id="#events"
					onClick={hamClickHandler}
					href="/main-website22#events"
					onFocus={show}
				>
					Events
				</Navlink>
				<Navlink
					id="#sponsors"
					onClick={hamClickHandler}
					href="/main-website22#sponsors"
					onFocus={show}
				>
					Sponsors
				</Navlink>
				<Navlink onClick={hamClickHandler}>
					<Link
						to="/main-website22/team"
						href="/main-website22/team"
						onFocus={show}
						sx={{ color: 'white', textDecoration: 'none' }}
					>
						Our Team
					</Link>
				</Navlink>
				<Navlink onClick={hamClickHandler} href="#footer" onFocus={show}>
					Contact Us
				</Navlink>
			</ul>
			<div
				className={`${mobNav ? style.hide : ''} ${style.ham}`}
				onClick={hamClickHandler}
			>
				<img
					src={ham}
					className={`${style.hamImg} ${mobNav ? style['hide'] : ''}`}
				/>
			</div>
		</div>
	);
};

export default Navbar;
