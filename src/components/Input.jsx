import React from 'react';
import styles from '../styles/input.module.css';

const Input = ({ placeholder, estilo, onChange, dispatch }) => {
	return (
		<input
			placeholder={placeholder}
			className={styles.input}
			style={estilo ? { width: estilo } : null}
			onChange={(e) => onChange(e.target.value, dispatch)}
			type='text'
		/>
	);
};

export default Input;
