import React, { useEffect } from 'react';

import styles from '../styles/results.module.css';
import Card from './Card';

const Results = ({ recipes }) => {
	useEffect(() => {
		console.log(recipes);
	}, [recipes]);
	return (
		<div>
			{recipes?.length > 0
				? recipes.map(({ recipe }) => {
						return <Card recipe={recipe} />;
				  })
				: 'no se encontraron recetas'}
		</div>
	);
};

export default Results;
