import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="nav-wrap">
			<ul className="nav">
				<li><NavLink to="react/home/styled-components">Styled Components</NavLink></li>
				<li><NavLink to="react/home/todo">Todolist</NavLink></li>
				<li><NavLink to="react/home/hook1">useState</NavLink></li>
				<li><NavLink to="react/home/hook2">useEffect</NavLink></li>
				<li><NavLink to="react/home/hook3">useRef</NavLink></li>
				<li><NavLink to="react/home/Hook4">Context/useContext</NavLink></li>
				<li><NavLink to="react/home/Hook5">useMemo</NavLink></li>
				<li><NavLink to="react/home/Hook6">useCallback</NavLink></li>
			</ul>
		</nav>
	);
};

export default Nav;