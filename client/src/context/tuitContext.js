import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import tuitReducer from '../reducer/tuitReducer';
import db from '../db/tuits.json';

const initState = db;

export const TuitContext = createContext();

export function TuitContextProvider(props) {
	const { children } = props;
	const [ state, dispatch ] = useReducer(tuitReducer, initState);

	return (
		<TuitContext.Provider value={{ state, dispatch }}>
			{ children }
		</TuitContext.Provider>
	)
}

TuitContextProvider.propTypes = {
	children: PropTypes.node.isRequired
}
