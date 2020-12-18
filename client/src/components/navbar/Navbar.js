import cls from './Navbar.module.css';

function Navbar() {

	return (
		<nav className={cls.navbar}>
			<div className={cls.itemCtn}>
				<h1 className={cls.name}>Tuittr</h1>
			</div>
		</nav>
	)
}

export default Navbar;
