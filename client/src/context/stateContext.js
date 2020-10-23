import React, { createContext, useReducer } from 'react';

import reducer from '../reducer/reducer';
import db from '../db/db.json';

const initState = db;

export const StateContext = createContext();

export function StateContextProvider(props) {
	const { children } = props;
	const [ state, dispatch ] = useReducer(reducer, initState);

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{ children }
		</StateContext.Provider>
	)
}
