import React, { useContext } from 'react';
import cls from './Navbar.module.css';
import { StateContext } from '../../context/stateContext';
import useDropdown from '../../hooks/useDropdown';
import { ReactComponent as ExpandIcon } from '../../images/expand_more.svg';

import ProfilePicture from '../common/ProfilePicture';
import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';

function Navbar() {
	const { currentUser, users } = useContext(StateContext).state;
	const { open, dropRef, onOpen } = useDropdown(false);

	return (
		<nav className={cls.navbar}>
			<div className={cls.itemCtn}>
				<h1 className={cls.name}>Tuittr</h1>
			</div>
			<div className={cls.itemCtn}>
				<ProfilePicture color={currentUser.profilePic}/>
				<h4>{currentUser.username}</h4>
				<ExpandIcon className={cls.expandIcon} onClick={onOpen} ref={dropRef}/>
				{
					open && (
						<Menu>
							{
								users.map(user => (
									<MenuItem key={user.ign}>
										<ProfilePicture color={user.profilePic}/>
										<h4>{ user.username }</h4>
									</MenuItem>
								))
							}
						</Menu>
					)
				}
			</div>
		</nav>
	)
}

export default Navbar;
