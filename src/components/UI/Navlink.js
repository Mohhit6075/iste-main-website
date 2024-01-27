import React from 'react';

import styles from './Navlink.module.css';

const Navlink = (props) => {
	return (
		<>
			<a	id={props.id}
				style={{
					color: 'white',
					fontSize: '20px',
					textDecoration: 'none',
					margin: 'auto',
				}}
				href={props.href}
				dest={props.href}
				// onFocus={props.onFocus}
				onClick={props.onClick}
			>
				{props.children}
			</a>
		</>
	);
};

export default Navlink;
