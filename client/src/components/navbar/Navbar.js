import React, { useEffect, useContext } from 'react';
import cls from './Navbar.module.css';
import { UserContext } from '../../context/userContext';
import useDropdown from '../../hooks/useDropdown';
import { ReactComponent as ExpandIcon } from '../../images/expand_more.svg';

import ProfilePicture from '../common/ProfilePicture';
import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';

function Navbar() {
	const { state, dispatch } = useContext(UserContext);
	const { open, dropRef, onOpen } = useDropdown(false);

	const handleUser = user => {
		const { ign, username, profilePic } = user;
		dispatch({
			type: 'SELECT_USER',
			payload: { ign, username, profilePic }
		})
	}

	useEffect(() => {
		document.title = `Tuittr | ${state.currentUser.username} (@${state.currentUser.ign})`;
	}, [state.currentUser]);

	return (
		<nav className={cls.navbar}>
			<div className={cls.itemCtn}>
				<h1 className={cls.name}>Tuittr</h1>
			</div>
			<div className={cls.itemCtn}>
				<ProfilePicture color={state.currentUser.profilePic}/>
				<h4>{state.currentUser.username}</h4>
				<ExpandIcon className={cls.expandIcon} onClick={onOpen} ref={dropRef}/>
				{
					open && (
						<Menu>
							{
								state.users.filter(user => user.ign !== state.currentUser.ign).map(user => (
									<MenuItem key={user.ign} onClick={() => handleUser(user)}>
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
