import React, { useContext } from 'react';
import cls from './Feed.module.css';
import { StateContext } from '../../context/stateContext';
import formatDate from '../../utils/formatDate';

import ProfilePicture from '../common/ProfilePicture';

function Feed() {
	const { tuits } = useContext(StateContext).state;

	return (
		<div className={cls.feed}>
			{
				tuits.map(tuit => (
					<div className={cls.tuit} key={tuit.id}>
						<div className={cls.profilePicCtn}>
							<ProfilePicture color={tuit.profilePic} size='lg'/>
						</div>
						<div className={cls.tuitContent}>
							<div className={cls.tuitInfo}>
								<span className={cls.username}>{tuit.username}</span>
								<span className={cls.ign}>{`@${tuit.ign}`}</span>
								<span className={cls.dotSeparator}>·</span>
								<time className={cls.date} dateTime={tuit.date}>
									{formatDate(tuit.date)}
								</time>
							</div>
							<div className={cls.tuitText}>
								{ tuit.text }
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Feed;
