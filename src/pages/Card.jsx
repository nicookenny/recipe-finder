import React from 'react';

import styles from '../styles/card.module.css';

const Card = ({ recipe }) => {
	return (
		<div className={styles.card}>
			<img src={recipe.image} alt='' />
			<div className={styles.recipeInfo}>
				<h3>{recipe.label}</h3>

				<p>Calorias: {parseInt(recipe.calories)}</p>

				<p style={{ fontSize: '16px' }}>
					Health labels:{' '}
					{recipe?.healthLabels.map((label, i) => {
						return (
							<>
								<b className={styles.label}>
									{label}
									{i === recipe.healthLabels.length - 1 ? '' : ', '}
								</b>
							</>
						);
					})}
                    <br/>
					Diet labels:{' '}
					{recipe?.dietLabels.map((label, i) => {
						return (
							<>
								<b className={styles.label}>
									{label}
									{i === recipe.dietLabels.length - 1 ? '' : ', '}
								</b>
							</>
						);
					})}
				</p>
			</div>
			<div className={styles.recipeTitle}>
				<a className={styles.button} href={recipe.shareAs}>
					Más información
				</a>
			</div>
		</div>
	);
};

export default Card;
