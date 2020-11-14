function tuitReducer(state, action) {
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

		case 'DELETE_TUIT':
			return ({
				...state,
				tuits: state.tuits.filter(tuit => tuit.id !== payload)
			})

		default:
			return state;
	}
}

export default tuitReducer;
