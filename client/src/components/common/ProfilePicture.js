import React from 'react';
import cls from './ProfilePicture.module.css';

const sizes = {
	sm: '37px',
	lg: '45px'
}

function ProfilePicture(props) {
	const {
		color = '#922fcc',
		size = 'sm'
	} = props;

	return (
		<div
			className={cls.profilePicture}
			style={{backgroundColor: color, width: sizes[size], height: sizes[size]}}
		/>
	)
}

export default ProfilePicture;
