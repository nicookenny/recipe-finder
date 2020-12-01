import React, { useReducer } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';

import styles from '../styles/home.module.css';

import reducer from '../reducer';

import dietOptions from '../diet-options';
import healthOptions from '../health-options';
import Button from '../components/Button';
import Results from './Results';

const handlerIngredient = (value, dispatch) => {
	dispatch({
		type: 'CHANGE_INGREDIENT',
		ingredients: value,
	});
};

const handlerHealth = (value, dispatch) => {
	dispatch({
		type: 'CHANGE_HEALTH',
		health: value,
	});
};

const handlerDiet = (value, dispatch) => {
	dispatch({
		type: 'CHANGE_DIET',
		diet: value,
	});
};

const handlerNutrients = (value, dispatch) => {
	dispatch({
		type: 'CHANGE_CALORIES',
		calories: value,
	});
};

const handlerSearch = async (state, dispatch) => {
	if (state.ingredients == '') {
		dispatch({
			type: 'HAVE_ERROR',
			error: 'Debes buscar al menos un ingrediente!',
		});

		return setTimeout(() => {
			dispatch({
				type: 'HAVE_ERROR',
				error: null,
			});
		}, 2000);
	}

	dispatch({
		type: 'START_FETCHING',
	});

	const URL = `https://api.edamam.com/search?q=${
		state.ingredients
	}&app_id=285cb603&app_key=9c62a8688d0be042d056294598824e6e&from=0&to=10${
		state.health ? `&health=${state.health}` : ''
	}${state.diet ? `&diet=${state.diet}` : ''}${
		state.calories ? `&calories=${state.calories}` : ''
	}`;

	const response = await (await fetch(URL)).json();

	dispatch({
		type: 'STOP_FETCHING',
	});

	dispatch({
		type: 'GET_RESPONSE',
		recipes: response.hits,
	});
};

const Home = () => {
	const [
		{ ingredients, health, diet, calories, loading, recipes, error },
		dispatch,
	] = useReducer(reducer, {
		ingredients: '',
		health: '',
		diet: '',
		calories: '',
		error: null,
		loading: false,
		recipes: [],
	});

	return (
		<div className={styles.home}>
			<div>
				<h1 className={styles.title}>Busca recetas a tu medida!</h1>

				<div style={{display:'flex',margin:'auto',justifyContent:'center',alignItems:'center'}}>
					<div style={{display:'flex',flexDirection:'column'}}>
					<Input
						estilo={'225px'}
						placeholder={'Ingrese ingredientes de su interés'}
						onChange={handlerIngredient}
						dispatch={dispatch}
					/>
					<span style={{ fontSize: '12px', color: 'red' }}>
						{error ? error : null}
					</span>
					</div>
					<Select
						dispatch={dispatch}
						onChange={handlerHealth}
						placeholder={'Health labels'}
						options={healthOptions}
					/>
					<Select
						dispatch={dispatch}
						onChange={handlerDiet}
						options={dietOptions}
						placeholder={'Diet labels'}
					/>
					<Input
						dispatch={dispatch}
						onChange={handlerNutrients}
						placeholder={'Ingresa un límite de calorías'}
					/>
					<Button
						onClick={handlerSearch}
						dispatch={dispatch}
						state={{ ingredients, health, diet, calories, loading, recipes }}
						value={'Buscar recetas'}
					/>
				</div>
				<Results recipes={recipes} />
			</div>
		</div>
	);
};

export default Home;
