const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INGREDIENT':
			return {
				...state,
				ingredients: action.ingredients,
			};
		case 'CHANGE_HEALTH':
			return {
				...state,
				health: action.health,
			};
		case 'CHANGE_DIET':
			return {
				...state,
				diet: action.diet,
			};
		case 'CHANGE_CALORIES':
			return {
				...state,
				calories: action.calories,
			};
		case 'START_FETCHING':
			return {
				...state,
				loading: true,
			};
		case 'STOP_FETCHING':
			return {
				...state,
				loading: false,
			};
		case 'GET_RESPONSE':
			return {
				...state,
				recipes: action.recipes,
			};
		case 'HAVE_ERROR':
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
