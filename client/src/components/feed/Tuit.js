import React from 'react';
import PropTypes from 'prop-types';
import cls from './Tuit.module.css';
import formatDate from '../../utils/formatDate';

import ProfilePicture from '../common/ProfilePicture';
import MoreMenuButton from './MoreMenuButton';

function Tuit(props) {
	const { tuit } = props;

	return (
		<article className={cls.tuit}>
			<div className={cls.profilePicCtn}>
				<ProfilePicture color={tuit.profilePic} size='lg'/>
			</div>
			<div className={cls.tuitContent}>
				<div className={cls.tuitHeader}>
					<div className={cls.tuitInfo}>
						<div className={cls.userIgnCtn}>
							<span className={`${cls.username} ${cls.hideOverflow}`}>{tuit.username}</span>
							<span className={`${cls.ign} ${cls.hideOverflow}`}>{`@${tuit.ign}`}</span>
						</div>
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
		</article>
	)
}

Tuit.propTypes = {
	tuit: PropTypes.object.isRequired
}

export default Tuit;
