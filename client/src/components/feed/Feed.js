import React, { useContext } from 'react';
import cls from './Feed.module.css';
import { StateContext } from '../../context/stateContext';
import formatDate from '../../utils/formatDate';

import ProfilePicture from '../common/ProfilePicture';

function Feed() {
	const { tuitts } = useContext(StateContext).state;

	return (
		<div className={cls.feed}>
			{
				tuitts.map(tuitt => (
					<div className={cls.tuitt} key={tuitt.id}>
						<div className={cls.profilePicCtn}>
							<ProfilePicture color={tuitt.profilePic} size='lg'/>
						</div>
						<div className={cls.tuittContent}>
							<div className={cls.tuittInfo}>
								<span className={cls.username}>{tuitt.username}</span>
								<span className={cls.ign}>{`@${tuitt.ign}`}</span>
								<span className={cls.dotSeparator}>·</span>
								<time className={cls.date} dateTime={tuitt.date}>
									{formatDate(tuitt.date)}
								</time>
							</div>
							<div className={cls.tuittText}>
								{ tuitt.text }
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Feed;
