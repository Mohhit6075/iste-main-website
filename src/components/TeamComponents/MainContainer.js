import React, { useEffect, useState } from 'react';
import { cardActionAreaClasses, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia, CardActions } from '@mui/material';

import { Skeleton } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Tooltip } from '@mui/material';

import { Fade } from 'react-awesome-reveal';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/styles';
import './team.css';
const useStyles = makeStyles({
	heading__: {
		color: 'black',
		overflow: 'hidden',
	},
	image: {
		height: '24rem',
		width: '25rem',
	},
	Name: {
		marginTop: '10px',
	},
	hover: {
		'&:hover': {
			backgroundColor: 'rgb(7, 177, 77, 0.42)',
		},
	},
});
const Container4 = (props) => {
	// console.log(props.data);
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 5000);
	});
	return (
		<>
			<Typography
				variant="h4"
				textAlign={'center'}
				sx={{ background: 'rgb(29 ,32, 38)', color: '#f06f2b' }}
				className={classes.heading__}
			>
				{props.year} Year
			</Typography>
			<Grid
				container
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					// padding: '2rem',
					columnGap: '100px',
					padding: '0px 182px',
					background: 'rgb(29 ,32, 38)',
				}}
			>
				{props.data.map((person, index) => (
					<Fade
						triggerOnce
						direction="up"
						damping={0.7}
						// style={{ marginLeft: '1.87rem', margin: '1.3rem' }}
					>
						{/* <Grid item key={index} className={classes.card}> */}
						{/* <Card sx={{}}>
								{loading ? (
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										<CardMedia
											component={'img'}
											height="250px"
											image={`${person.imgsrc}`}
											sx={{
												// width: '60%',
												// height: '250px',
												'@media(max-width:450px)': {
													height: '185px',
												},
												objectFit: 'cover',
											}}
										></CardMedia>
									</div>
								) : (
									<Skeleton
										variant="rectangular"
										width={'100%'}
										height={'100%'}
										animation="wave"
									></Skeleton>
								)}

								<CardActions
									sx={{ justifyContent: 'center', flexDirection: 'column' }}
								>
									<Typography>{person.name}</Typography>
									<Button sx={{ textAlign: 'center' }}>
										{person.vertical}
									</Button>
									
								</CardActions>
							</Card> */}
						<Grid
							item
							key={index}
							spacing={2}
							gap={2}
							className={(classes.card, 'profileImage')}
						>
							<div
								className="card-profile"
								style={{
									height: '400px',
									width: '250px',
									// border: '2px solid blue',
								}}
							>
								<div className="profileImage">
									<img
										className={('image', 'hover')}
										src={person.imgsrc}
										alt=""
										style={{
											objectFit: 'cover',
											height: '250px',
											width: '240px',
											borderRadius: '15px 50px',
										}}
									/>
								</div>
								<div>
									<Typography
										className={classes.Name}
										textAlign={'center'}
										sx={{ marginTop: '10px', color: 'white', opacity: '0.8' }}
									>
										{person.name}{' '}
									</Typography>
								</div>
								<div className="Resp">
									<p
										className="vertical"
										style={{
											color: 'white',
											textAlign: 'center',
											fontSize: '13px',
											fontWeight: 'bold',
											marginBottom: '2px',
											opacity: '0.9',
											lineHeight: '20px',
										}}
									>
										{person.vertical === 'Quizzing'
											? 'Team Member'
											: `${person.vertical}`}
									</p>
								</div>
								<div>
									<Tooltip title="Linkedin" arrow>
										<Button sx={{ minWidth: '0px' }}>
											<a target={'__blank'} href={person.linkedinProfile}>
												<LinkedInIcon
													size="small"
													sx={{ color: 'white' }}
												></LinkedInIcon>
											</a>
										</Button>
									</Tooltip>
									<Tooltip title="Instagram" arrow>
										<Button sx={{ minWidth: '0px' }} size="small">
											<a target={'__blank'} href={person.instagramProfile}>
												<InstagramIcon
													sx={{
														color: 'white',
													}}
												></InstagramIcon>
											</a>
										</Button>
									</Tooltip>
									<Tooltip title="FaceBook" arrow>
										<Button sx={{ minWidth: '0px' }}>
											<a target={'__blank'} href={person.facebookProfile}>
												<FacebookIcon sx={{ color: 'white' }}></FacebookIcon>
											</a>
										</Button>
									</Tooltip>

									{person.vertical.includes('Web') === true ||
									person.vertical.includes('Technical') === true ? (
										<Tooltip title="Github" arrow>
											<Button sx={{ minWidth: '0px' }}>
												<a target={'__blank'} href={person.githubProfile}>
													<GitHubIcon sx={{ color: 'white' }}></GitHubIcon>
												</a>
											</Button>
										</Tooltip>
									) : (
										<Tooltip title="Twitter" arrow>
											<Button sx={{ minWidth: '0px' }}>
												<a href={person.twitterProfile} target={'__blank'}>
													<TwitterIcon sx={{ color: 'white' }}></TwitterIcon>
												</a>
											</Button>
										</Tooltip>
									)}
								</div>
							</div>
						</Grid>
					</Fade>
				))}
			</Grid>
		</>
	);
};

export default Container4;
