import React, { useContext } from 'react';
import cls from './Tuit.module.css';
import { StateContext } from '../../context/stateContext';
import useDropdown from '../../hooks/useDropdown';
import formatDate from '../../utils/formatDate';
import { ReactComponent as MoreIcon } from '../../images/more_horiz.svg';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';

import ProfilePicture from '../common/ProfilePicture';
import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';

function Tuit(props) {
	const { tuit } = props;
	const { state, dispatch } = useContext(StateContext);
	const { open, dropRef, onOpen } = useDropdown(false);
	
	const isOwner = state.currentUser.ign === tuit.ign;

	return (
		<div className={cls.tuit}>
			<div className={cls.profilePicCtn}>
				<ProfilePicture color={tuit.profilePic} size='lg'/>
			</div>
			<div className={cls.tuitContent}>
				<div className={cls.tuitHeader}>
					<div className={cls.tuitInfo}>
						<span className={cls.username}>{tuit.username}</span>
						<span className={cls.ign}>{`@${tuit.ign}`}</span>
						<span className={cls.dotSeparator}>·</span>
						<time className={cls.date} dateTime={tuit.date}>
							{formatDate(tuit.date)}
						</time>
					</div>
					<div className={cls.moreIconCtn}>
						<div className={cls.moreIconBtn} onClick={onOpen} ref={dropRef}>
							<MoreIcon className={cls.moreIcon}/>
							{
								open && (
									<Menu>
										<MenuItem
											color='secondary'
											clickable
											disabled={!isOwner}
											onClick={() => dispatch({
												type: 'DELETE_TUIT',
												payload: tuit.id
											})}
										>
											<DeleteIcon
												className={
												`${cls.deleteIcon} ${!isOwner ? cls.disabled : ''}`.trim()}
											/>
											Delete
										</MenuItem>
										<MenuItem>SECOND</MenuItem>
									</Menu>
								)
							}
						</div>
					</div>
				</div>
				<div className={cls.tuitText}>
					{ tuit.text }
				</div>
			</div>
		</div>
	)
}

export default Tuit;
