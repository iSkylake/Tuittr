function reducer(state, action) {
	const { type, payload } = action;

	switch(type) {
		case 'ADD_TUIT':
			return ({
				...state,
				tuitts: [
					...state.tuitts,
					{...payload}
				]
			});

		default:
			return state;
	}
}

export default reducer;
