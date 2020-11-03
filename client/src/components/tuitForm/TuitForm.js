import React, { useContext } from 'react';
import cls from './TuitForm.module.css';

import { StateContext } from '../../context/stateContext';
import useInput from '../../hooks/useInput';
import ProfilePicture from '../common/ProfilePicture';

function TuitForm() {
	const { state, dispatch } = useContext(StateContext);
	const tuit = useInput('');

	const handleSubmit = event => {
		const { username, ign, profilePic } = state.currentUser;
		event.preventDefault();
		if(tuit.value) {
			dispatch({
				type: 'ADD_TUIT',
				payload: {
					username, ign, profilePic,
					id: Date.now().toString(),
					date: new Date(Date.now()).toString(),
					text: tuit.value
				}
			});
			tuit.onReset();
		}
	}

	return (
		<form className={cls.tuitForm} onSubmit={handleSubmit}>
			<ProfilePicture color={state.currentUser.profilePic}/>
			<input className={cls.tuitInput} {...tuit} placeholder="What's on your mind?"/>
			<button className={cls.tuitSubmit}>Submit</button>
		</form>
	)
}

export default TuitForm;
