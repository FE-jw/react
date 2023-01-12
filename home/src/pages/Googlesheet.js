import React from 'react';
import useGoogleSheets from 'use-google-sheets';

const Googlesheet = () => {
	const myKey = '1V37XfXu6Qd4h8HN1esvLxneBeW5ci5acKlXN2Xfsnvg';

	const { data, loading, error } = useGoogleSheets({
		apiKey: 'AIzaSyDCI7QqY1rJI2T7VC5tcImFkIwOyM9pyEc',
		sheetId: myKey
		// sheetsOptions: [{ id: 'sheet1' }]
	});

	console.log(data[0]);

	return (
		<div>

		</div>
	);
};

export default Googlesheet;