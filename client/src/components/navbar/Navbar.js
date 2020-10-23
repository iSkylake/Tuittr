import React, { useContext } from 'react';
import cls from './Navbar.module.css';
import { StateContext } from '../../context/stateContext';

import ProfilePicture from '../common/ProfilePicture';

function Navbar() {
	const { currentUser } = useContext(StateContext).state;

	return (
		<nav className={cls.navbar}>
			<div className={cls.itemCtn}>
				<h1 className={cls.name}>Tuittr</h1>
			</div>
			<div className={cls.itemCtn}>
				<ProfilePicture color={currentUser.profilePic}/>
				<h4>{currentUser.username}</h4>
			</div>
		</nav>
	)
}

export default Navbar;
