import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
	box: {},
});
const liquidContainer = () => {
	// const classes = useStyles();
	return (
		<Box
			sx={{
				height: '90%',
				width: '90%',
				backgroundColor: '#424d55',
				blur: '20px',
				opacity: '0.7',
			}}
		></Box>
	);
};

export default liquidContainer;
