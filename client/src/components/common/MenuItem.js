import React from 'react';
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

export default MenuItem;
