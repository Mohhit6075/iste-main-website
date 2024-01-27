import React, { useState } from 'react';

import Navbar from '../components/UI/Navbar';
import Sponsors from '../components/UI/Sponsors';
import About from '../components/About/About';
import style from '../App.module.css';
import EventsContainer from '../components/Event/EventsContainer';
import Header from '../components/Header';
import BreakLine from '../components/UI/BreakLine';
// import Footer from '../components/Footer/Footer';
import Footer from '../components/UI/Footer';

import { Stack, Box } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import Team from '../components/Team/Team';

import TeamPage from '../pages/TeamPage';

import Nav1 from '../components/UI/Nav1';

function App() {
	return (
		<>
			{/* <Navbar /> */}

			<Nav1 />
			<Header></Header>
			{/* <Slide triggerOnce direction="up"> */}
			{/* <Slide></Slide> */}
			<About></About>
			{/* </Slide> */}
			{/* <Slide triggerOnce direction="up"> */}
			<EventsContainer />
			{/* </Slide> */}

			{/* <BreakLine /> */}
			{/* <Team/> */}
			<Slide triggerOnce>
				<Sponsors>{/* */}</Sponsors>
			</Slide>

			<Footer></Footer>
		</>
	);
}

export default App;
