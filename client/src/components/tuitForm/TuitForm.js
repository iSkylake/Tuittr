import React from 'react';
import cls from './TuitForm.module.css';

import ProfilePicture from '../common/ProfilePicture';

function TuitForm() {

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form className={cls.tuitForm} onSubmit={handleSubmit}>
			<ProfilePicture/>
			<input className={cls.tuitInput} placeholder="What's on your mind?"/>
			<button className={cls.tuitSubmit}>Submit</button>
		</form>
	)
}

export default TuitForm;
