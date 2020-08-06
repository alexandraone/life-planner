import React, { useEffect } from 'react';
import io from 'socket.io-client';

const Home = () => {
	useEffect(() => {
		console.log('Started...');
		const socket = io('http://localhost:3000');
		// Add listeners to update the app state
		socket.on('welcome', (message: string) => {
			console.log(message);
		});
	}, []);
	return <div>Hej</div>;
};

export default Home;
