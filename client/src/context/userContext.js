import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import userReducer from '../reducer/userReducer';
import db from '../db/users.json';

const initState = db;

export const UserContext = createContext();

export function UserContextProvider(props) {
	const { children } = props;
	const [ state, dispatch ] = useReducer(userReducer, initState);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{ children }
		</UserContext.Provider>
	)
}

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired
}
