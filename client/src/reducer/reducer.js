function reducer(state, action) {
	const { type, payload } = action;

	switch(type) {
		case 'ADD_TUIT':
			return ({
				...state,
				tuits: [
					...state.tuits,
					{...payload}
				]
			});

		default:
			return state;
	}
}

export default reducer;
