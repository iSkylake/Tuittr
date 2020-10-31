import React, { useContext } from 'react';
import cls from './Feed.module.css';
import { StateContext } from '../../context/stateContext';
import sortByDate from '../../utils/sortByDate';

import Tuit from './Tuit';

function Feed() {
	const { state } = useContext(StateContext);

	if(!state.tuits.length) {
		return (
			<div className={cls.empty}>
				<h2>No tuits available</h2>
			</div>
		)
	}

	return (
		<div className={cls.feed}>
			{
				state.tuits.sort(sortByDate).map(tuit => (<Tuit key={tuit.id} tuit={tuit}/>))
			}
		</div>
	)
}

export default Feed;
