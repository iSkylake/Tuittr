import React from 'react';
import PropTypes from 'prop-types';
import cls from './ProfilePicture.module.css';

const sizes = {
	sm: cls.sm,
	lg: cls.lg,
	xlg: cls.xlg
}

function ProfilePicture(props) {
	const {
		color = '#922fcc',
		size = 'sm'
	} = props;

	return (
		<div
			className={`${cls.profilePicture} ${sizes[size]}`.trim()}
			style={{backgroundColor: color}}
		/>
	)
}

ProfilePicture.propTypes = {
	color: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired
}

export default ProfilePicture;
