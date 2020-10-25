import React from 'react';
import cls from './TuitForm.module.css';

import useInput from '../../hooks/useInput';
import ProfilePicture from '../common/ProfilePicture';

function TuitForm() {
	const tuit = useInput('');

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form className={cls.tuitForm} onSubmit={handleSubmit}>
			<ProfilePicture/>
			<input className={cls.tuitInput} {...tuit} placeholder="What's on your mind?"/>
			<button className={cls.tuitSubmit}>Submit</button>
		</form>
	)
}

export default TuitForm;
