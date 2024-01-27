import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import AboutImgPath from '../../assets/Team.JPG';
import { useMediaQuery } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { Skeleton } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import './About.css';

const useStyles = makeStyles({
	root: {
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
	pre: {
		height: '15px',
		margin: '4px',
	},
	about: {
		background: '#242830',
	},
	card: {
		boxShadow:
			'rgb(256,256,256) 0px 15px 20px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
	},
});
const About = () => {
	const classes = useStyles();
	const [view, setView] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 6000);
	});

	const [loading, setLoading] = useState(false);

	return (
		<div id="about" style={{ minHeight: '100vh' }}>
			<div className="bg___">
				<Typography
					variant="h3"
					sx={{ textAlign: 'center', color: '#f06f2b;', paddingTop: '50px;' }}
				>
					<Slide triggerOnce direction="down">
						About Us
					</Slide>
				</Typography>
				<Grid
					container
					// columnSpacing={3}
					sx={{
						alignItems: 'center',
						justifyContent: 'center',
						paddingBottom: '0.8rem',
						marginTop: '2rem',
						// backgroundColor: 'red',
						width: '100%',
					}}
					columnGap={7}
				>
					<Grid
						item
						className={classes.card}
						sx={{
							width: '38%',
							margin: '0.7rem',
							height: '50%',
							justifyContent: 'center',
							alignItems: 'center',
							'@media(max-width: 780px)': {
								width: '70%',
							},
						}}
					>
						<Card>
							<Fade>
								<CardMedia
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<img
										src={`${AboutImgPath}`}
										style={{ width: '100%', height: '70%' }}
										alt=""
									/>
								</CardMedia>
							</Fade>
						</Card>
					</Grid>
					<Grid
						item
						sx={{
							width: '40%',
							margin: '0.7rem',
							height: '50%',
							justifyContent: 'center',
							alignItems: 'center',
							'@media(max-width: 780px)': {
								width: '70%',
							},
						}}
					>
						{loading ? (
							<Slide direction="right" triggerOnce>
								<Typography
									sx={{
										textAlign: 'justify',
										opacity: 0.7,
										color: 'white',
										fontSize: '0.85rem',
									}}
									variant="body1"
								>
									Indian Society for Technical Education (ISTE) is a National
									level non-profit Society for the Technical Education System in
									our country. ISTE assists and contributes to the production
									and development of top quality professional technocrats. It
									has over 1505 Student Chapters at the institutional level, one
									such chapter is ISTE SC MANIT. ISTE SC MANIT is one of the
									oldest student organizations in MANIT. Started in 2003, it has
									been actively contributing towards the professional and
									technical education of the students at MANIT and beyond. It
									has been conducting national level events like ChimeraX - The
									Multi-city Quizzing Competition, CODATHON - The Inter NIT
									Coding Contest, Anubhuti - The Talkshow, Megatreopuz - The
									Online Cryptic Hunt, Version β - The National level Hackathon.
									Events like these have gifted ISTE SC MANIT the Best Students'
									Chapter Award in the MP & Chhattisgarh region, not once but
									thrice.
								</Typography>
							</Slide>
						) : (
							<div>
								{Array.from(Array(16)).map((_, index) => (
									<Skeleton
										variant="rounded"
										height={15}
										key={index}
										className={classes.pre}
										animation="wave"
										sx={{ opacity: '0.7' }}
									/>
								))}
							</div>
						)}
						{/* <Slide direction="right" triggerOnce>
						
						
						
					</Slide> */}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default About;
