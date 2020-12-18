import React, { useState, useEffect, useContext } from 'react';
import cls from './TuitForm.module.css';

import { UserContext } from '../../context/userContext';
import { TuitContext } from '../../context/tuitContext';
import useInput from '../../hooks/useInput';

function TuitForm() {
	const { state } = useContext(UserContext);
	const { dispatch } = useContext(TuitContext);
	const [ charCount, setCharCount ] = useState(280);
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

	useEffect(() => {
		setCharCount(280 - tuit.value.length)
	}, [tuit.value])

	return (
		<form className={cls.tuitForm} onSubmit={handleSubmit}>
			<div className={cls.picInputCtn}>
				<div className={cls.tuitInputCtn}>
					<input
						className={cls.tuitInput}
						{...tuit}
						placeholder="What's on your mind?"
						maxLength='280'
					/>
					<span className={cls.charCount}>{charCount}</span>
				</div>
			</div>
			<button className={cls.tuitSubmit}>Submit</button>
		</form>
	)
}

export default TuitForm;
