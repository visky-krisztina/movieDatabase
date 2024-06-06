import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";
const Navbar = () => {
	return (
		<nav>
			<div className='nav-center'>
				<span className='logo'>Film kereső</span>
				<div className='nav-links'>
					<NavLink to='/' className='nav-link'>
						Home
					</NavLink>
					<NavLink to='/about' className='nav-link'>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
