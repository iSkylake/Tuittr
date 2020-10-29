import React, { useContext } from 'react';
import cls from './Feed.module.css';
import { StateContext } from '../../context/stateContext';
import sortByDate from '../../utils/sortByDate';

import Tuit from './Tuit';

function Feed() {
	const { state } = useContext(StateContext);

	return (
		<div className={cls.feed}>
			{
				state.tuits.sort(sortByDate).map(tuit => (<Tuit key={tuit.id} tuit={tuit}/>))
			}
		</div>
	)
}

export default Feed;
