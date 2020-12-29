import React from 'react';
import PropTypes from 'prop-types';
import cls from './Menu.module.css';

function Menu(props) {

	return (
		<ul className={cls.menu}>
			{ props.children }
		</ul>
	)
}

Menu.propTypes = {
	children: PropTypes.node.isRequired
}

export default Menu;
