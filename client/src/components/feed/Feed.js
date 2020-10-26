import React, { useContext } from 'react';
import cls from './Feed.module.css';
import { StateContext } from '../../context/stateContext';
import formatDate from '../../utils/formatDate';
import sortByDate from '../../utils/sortByDate';

import ProfilePicture from '../common/ProfilePicture';

function Feed() {
	const { state, dispatch } = useContext(StateContext);

	return (
		<div className={cls.feed}>
			{
				state.tuits.sort(sortByDate).map(tuit => (
					<div className={cls.tuit} key={tuit.id}>
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
								{
									tuit.ign === state.currentUser.ign && (
										<button
											className={cls.deleteBtn}
											onClick={() => dispatch({
												type: 'DELETE_TUIT',
												payload: tuit.id
											})}
										>
											Delete
										</button>
									)
								}
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
