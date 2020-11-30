import React from 'react';

import styles from '../styles/select.module.css';

const Select = ({ options, placeholder, onChange, dispatch }) => {
	return (
		<select
			onChange={(e) => {
				onChange(e.target.value, dispatch);
			}}
			className={styles.select}
			defaultValue={placeholder}
		>
			{placeholder ? <option disabled>{placeholder}</option> : null}
			<option value=''>Ninguna</option>
			{options?.map((option) => {
				return (
					<option key={option} value={option}>
						{option}
					</option>
				);
			})}
		</select>
	);
};

export default Select;
