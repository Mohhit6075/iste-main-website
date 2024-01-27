import React from 'react';

import './Footer.css';

import { LogoFacebook } from 'react-ionicons';
import { LogoInstagram } from 'react-ionicons';
import { LogoLinkedin } from 'react-ionicons';
import { MapOutline } from 'react-ionicons';
import { PhonePortraitOutline } from 'react-ionicons';
import { MailOpen } from 'react-ionicons';
import { Typography } from '@mui/material';
const Footer = (props) => {
	return (
		<div className="footer-container-main hidden" id="footer">
			<div className="footer-container">
				<div className="footer-left">
					<div className="footer-block">
						<h3 className="center-text">
							<MapOutline color={'#f06f2b'} height="40px" width="40px" />{' '}
							Address
						</h3>
						<p className="center-text">
							<a
								href="https://goo.gl/maps/nTNnuX6w5YbGKTic7"
								target="_blank"
								classNameName="text"
								style={{ textDecoration: 'none', color: 'white' }}
							>
								<Typography>
									Maulana Azad National Institute of Technology, Bhopal
								</Typography>
							</a>{' '}
						</p>
					</div>
				</div>
				<div className="footer-mid">
					<div className="footer-block">
						<h3 className="center-text">
							<PhonePortraitOutline
								color={'#f06f2b'}
								height="50px"
								width="50px"
							/>{' '}
							Contact
						</h3>
						<p>
							<a
								href="tel://9140160345"
								target="_blank"
								classNameName="text"
								style={{ textDecoration: 'none' }}
							>
								{/* <i className="fas fa-phone " aria-hidden="true"></i> */}
								<Typography
									sx={{ color: 'white', textDecoration: 'none' }}
									variant="body2"
								>
									Animesh Nayak +91 8504036415
								</Typography>
							</a>
						</p>
						<p>
							<a
								href="tel://9140160345"
								target="_blank"
								classNameName="text"
								style={{ textDecoration: 'none' }}
							>
								{/* <i className="fas fa-phone " aria-hidden="true"></i> */}
								<Typography
									sx={{ color: 'white', textDecoration: 'none' }}
									variant="body2"
								>
									Navyasree Konagalla +91 9490165056
								</Typography>
							</a>
						</p>
					</div>
				</div>
				<div className="footer-right">
					<div className="footer-block">
						<h3 className="center-text">
							<MailOpen color={'#f06f2b'} height="40px" width="40px" /> Email
							Address
						</h3>
						<p className="center-text" style={{ color: 'white' }}>
							<a
								href="mailto:istescmanit@gmail.com"
								classNameName="text"
								target="_blank"
								style={{ textDecoration: 'none', color: 'white' }}
							>
								<Typography>istescmanit@gmail.com</Typography>
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="line"></div>
			<div className="footer-block">
				<span className="center-text">Social Links</span>
				<div className="social-icon">
					<div className="icon">
						<a href="https://www.instagram.com/istemanit" target="_blank">
							<LogoInstagram color={'white'} height="40px" width="40px" />
						</a>
					</div>
					<div className="icon">
						<a href="https://www.facebook.com/ISTESCMANIT" target="_blank">
							{/* <i className="fab fa-facebook fa-2x"></i> */}
							<LogoFacebook color={'white'} height="40px" width="40px" />
						</a>
					</div>
					<div className="icon">
						<a
							href="https://www.linkedin.com/company/iste-sc-manit"
							target="_blank"
						>
							<LogoLinkedin color={'white'} height="40px" width="40px" />
						</a>
					</div>
				</div>
			</div>
			<div className="line"></div>
			<p className="copyright" style={{ color: 'white' }}>
				Copyright © 2022 by{' '}
				<span>
					<a
						href="https://istemanit.in/"
						classNameName="text"
						target="_blank"
						style={{ textDecoration: 'none', color: '#f06f2b' }}
					>
						ISTE-SC MANIT
					</a>
				</span>
				. <span className="all">All rights reserved.</span>
			</p>
		</div>
	);
};

export default Footer;
