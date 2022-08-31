import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import StyledComponents from './pages/StyledComponents';
import Hook1 from './pages/Hook1';
import Hook2 from './pages/Hook2';
import Todo from './pages/Todo';
// import ReactMemo from './pages/ReactMemo';

const Container = () => {
	return (
		<section className="container">
			<div className="content">
				<nav className="nav-wrap">
					<ul className="nav">
						<li><NavLink to="react/home/styled-components">Styled Components</NavLink></li>
						<li><NavLink to="react/home/todo">Todolist</NavLink></li>
						<li><NavLink to="react/home/hook1">useState</NavLink></li>
						<li><NavLink to="react/home/hook2">useEffect</NavLink></li>
						{/* <li><NavLink to="react/reactmemo">ReactMemo</NavLink></li> */}
					</ul>
				</nav>

				<Routes>
					<Route path="react/home/styled-components" element={<StyledComponents />} />
					<Route path="react/home/todo" element={<Todo />} />
					<Route path="react/home/hook1" element={<Hook1 />} />
					<Route path="react/home/hook2" element={<Hook2 />} />
					{/* {<Route path="react/home" element={<UseState />} />} */}
					{/* <Route path="react/reactmemo" element={<ReactMemo />} /> */}
				</Routes>
			</div>
		</section>
	);
};

export default Container;