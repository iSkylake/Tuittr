function userReducer(state, action) {
	const { type, payload } = action;

	switch(type) {
		case 'SELECT_USER':
			return ({
				...state,
				currentUser: { ...payload }
			})

		default:
			return state;
	}
}

export default userReducer;
