import React from 'react';
import PropTypes from 'prop-types';
import cls from './MenuItem.module.css';

function MenuItem(props) {
	const { color, disabled, onClick } = props;

	return (
		<li
			className={
				`${cls.menuItem} ${cls[color] || ''} ${disabled ? cls.disabled : ''}`.trim()
			}
			onClick={onClick}
		>
			{ props.children }
		</li>
	)
}

MenuItem.propTypes = {
	color: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired
}

export default MenuItem;
