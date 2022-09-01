import React, { useState } from 'react';

const Hook1 = () => {
	const [cnt, setCnt] = useState(0);

	return (
		<ul>
			<li>
				<h2>useState</h2>
				<div>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt - 10)}>-10</button>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt - 1)}>-1</button>
					<span>{cnt}</span>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt + 1)}>+1</button>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt + 10)}>+10</button>
				</div>
			</li>
		</ul>
	);
};

export default Hook1;