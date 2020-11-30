import React from 'react';
import styles from '../styles/button.module.css';
const Button = ({ value, onClick, state, dispatch }) => {
	return (
		<div>
			<button
				disabled={state.loading}
				onClick={() => {
					onClick(state, dispatch);
				}}
				className={styles.button}
			>
                {state.loading?'Cargando':value}
			</button>
		</div>
	);
};

export default Button;
