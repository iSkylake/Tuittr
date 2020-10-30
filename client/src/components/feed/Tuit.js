import React from 'react';
import cls from './Tuit.module.css';
import formatDate from '../../utils/formatDate';

import ProfilePicture from '../common/ProfilePicture';
import MoreMenuButton from './MoreMenuButton';

function Tuit(props) {
	const { tuit } = props;

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
					<MoreMenuButton tuit={tuit}/>
				</div>
				<div className={cls.tuitText}>
					{ tuit.text }
				</div>
			</div>
		</div>
	)
}

export default Tuit;
