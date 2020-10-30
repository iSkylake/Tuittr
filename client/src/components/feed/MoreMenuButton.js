import React, { useContext, Fragment } from 'react';
import cls from './MoreMenuButton.module.css';
import { StateContext } from '../../context/stateContext';
import useDropdown from '../../hooks/useDropdown';
import { ReactComponent as MoreIcon } from '../../images/more_horiz.svg';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';

import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';

function MoreMenuButton(props) {
	const { tuit } = props;
	const { state, dispatch } = useContext(StateContext);
	const { open, dropRef, onOpen } = useDropdown(false);
	
	const isOwner = state.currentUser.ign === tuit.ign;

	return (
		<Fragment>
			<div className={cls.moreIconCtn}>
				<div className={cls.moreIconBtn} onClick={onOpen} ref={dropRef}>
					<MoreIcon className={cls.moreIcon}/>
				</div>
			</div>
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
									`${cls.deleteIcon} ${!isOwner ? cls.disabled : ''}`.trim()
								}
							/>
							Delete
						</MenuItem>
					</Menu>
				)
			}
		</Fragment>
	);
}

export default MoreMenuButton;
