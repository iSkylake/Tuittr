import React from 'react';
import cls from './Menu.module.css';

function Menu(props) {

	return (
		<ul className={cls.menu}>
			{ props.children }
		</ul>
	)
}

export default Menu;
