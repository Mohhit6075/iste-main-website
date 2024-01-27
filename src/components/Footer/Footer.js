import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import { Paper } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoIste from '../../assets/ISTElogo.png';
import { Tooltip } from '@mui/material';

const Footer = () => {
	return (
		<div id="footer">
			<Paper sx={{ backgroundColor: 'rgba(12, 12, 59, 1);' }}>
				<Typography variant="h5" sx={{ textAlign: 'center' }}></Typography>
				<Grid
					container
					sx={{
						alignItems: 'center',
						justifyContent: 'center',
						paddingBottom: '0.8rem',
						// backgroundColor: 'red',
						width: '100%',
					}}
					columnGap={20}
					// fullWidth
					// spacing={18}
				>
					<Grid
						item
						sx={{
							width: '200px',
							margin: '0.7rem',
							height: '140px',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Button sx={{ color: 'white' }}>
								<HomeIcon></HomeIcon>{' '}
								<Typography sx={{ color: 'white' }}>Address</Typography>
							</Button>
							<a
								href="https://goo.gl/maps/nTNnuX6w5YbGKTic7"
								style={{
									textDecoration: 'none',
									color: 'whitesmoke',
									opacity: '0.7',
								}}
								target="__blank"
							>
								<Typography textAlign={'center'}>
									Maulana Azad National Institute of Technology, Bhopal
								</Typography>
							</a>
						</div>
					</Grid>
					<Grid
						item
						sx={{
							width: '200px',
							margin: '0.7rem',
							height: '140px',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Button sx={{ color: 'white' }}>
								<ContactsIcon></ContactsIcon> <Typography>Contact</Typography>
							</Button>
							<a
								href="tel:// 8504036415"
								style={{
									textDecoration: 'none',
									color: 'whitesmoke',
									opacity: '0.7',
								}}
							>
								<Typography>
									Animesh Nayak{' '}
									<Typography textAlign={'center'}>+91 8504036415</Typography>
								</Typography>
							</a>
							<a
								href="tel:// 9490165056"
								style={{
									textDecoration: 'none',
									color: 'whitesmoke',
									opacity: '0.7',
								}}
							>
								<Typography>
									Navyasree Konagalla
									<Typography textAlign={'center'}>+91 9490165056</Typography>
								</Typography>
							</a>
						</div>
					</Grid>
					<Grid
						item
						sx={{
							width: '200px',
							margin: '0.7rem',
							height: '140px',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Button sx={{ color: 'white' }}>
								<EmailIcon></EmailIcon> <Typography>Email Address</Typography>
							</Button>

							<a
								href="mailto:istescmanit@gmail.com"
								style={{
									textDecoration: 'none',
									color: 'whitesmoke',
									opacity: '0.7',
								}}
							>
								<Typography>istescmanit@gmail.com</Typography>
							</a>
							<div style={{ width: '150%' }}>
								<Grid>
									<Typography sx={{ textAlign: 'center' }}>
										<Button sx={{ color: 'white', outline: 'white' }}>
											<LinkIcon></LinkIcon>{' '}
											<Typography>Social Links</Typography>
										</Button>
										<div>
											<Tooltip title="Linkedin" arrow>
												<Button>
													<LinkedInIcon></LinkedInIcon>
												</Button>
											</Tooltip>
											<Tooltip title="Instagram" arrow>
												<Button>
													<InstagramIcon
														sx={{
															color: '#E1306C',
														}}
													></InstagramIcon>
												</Button>
											</Tooltip>
											<Tooltip title="FaceBook" arrow>
												<Button>
													<FacebookIcon></FacebookIcon>
												</Button>
											</Tooltip>
											<Tooltip title="Twitter" arrow>
												<Button>
													<TwitterIcon sx={{ color: '#1DA1F2' }}></TwitterIcon>
												</Button>
											</Tooltip>
										</div>
									</Typography>
								</Grid>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid container sx={{ justifyContent: 'center' }}>
					<Grid
						item
						sx={{
							width: '200px',
							// margin: '0.7rem',
							height: '140px',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img src={`	${logoIste}`} alt="" style={{ width: '100%' }} />
					</Grid>
				</Grid>

				<Typography
					variant="body1"
					textAlign={'center'}
					sx={{ color: 'white' }}
				>
					Copyright © 2022 by ISTE-SC MANIT. All rights reserved.
				</Typography>
			</Paper>
		</div>
	);
};

export default Footer;
