import { useEffect, useContext } from 'react';
import cls from './Header.module.css';
import { UserContext } from '../../context/userContext';
import useDropdown from '../../hooks/useDropdown';
import { ReactComponent as ExpandIcon } from '../../images/expand_more.svg';

import ProfilePicture from '../common/ProfilePicture';
import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';

function Header() {
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
		<header className={cls.header}>
			<div
				className={cls.headerPicture}
				style={{backgroundColor: state.currentUser.profilePic}}
			/>
			<div className={cls.headerInfo}>
				<div className={cls.profilePicCtn}>
					<ProfilePicture size='xlg' color={state.currentUser.profilePic}/>
				</div>
				<div className={cls.nameCtn}>
					<div className={cls.usernameExpandCtn}>
						<h4 className={cls.username}>{state.currentUser.username}</h4>
						<ExpandIcon className={cls.expandIcon} onClick={onOpen} ref={dropRef}/>
						{
							open && (
								<Menu>
									{
										state.users.filter(user => user.ign !== state.currentUser.ign).map(user => (
											<MenuItem key={user.ign} onClick={() => handleUser(user)}>
												<div className={cls.menuItemProfilePic}>
													<ProfilePicture color={user.profilePic}/>
												</div>
												<h4 className={cls.menuItemUsername}>{ user.username }</h4>
											</MenuItem>
										))
									}
								</Menu>
							)
						}
					</div>
					<span className={cls.ign}>{`@${state.currentUser.ign}`}</span>
				</div>
			</div>
		</header>
	)
}

export default Header;
