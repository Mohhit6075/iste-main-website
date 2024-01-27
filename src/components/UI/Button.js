import React from 'react';

import style from './Button.module.css';
const Button = (props) => {
	return (
		<button name={props.name} className={style.btn} onClick={props.onClick}>
			<span>
				{props.children}
			</span>
		</button>
	);
};

export default Button;
