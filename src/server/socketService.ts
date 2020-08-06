export function createSocket(io: SocketIO.Server, neodeService) {
	// Handle Socket connections
	console.log('Setting up websocket');
	const mNeodeService = neodeService;
	io.on('connection', (socket) => {
		console.log(`--> JOINED: ${socket.id}`);
		socket.emit('welcome', 'Welcome to lifeplanner!!!');

		console.log(mNeodeService);
		mNeodeService
			.cypher('MATCH p=()-[r:TODO]->() RETURN p LIMIT 25')
			.then((res) => {
				console.log(res.records.length);
			});
		// You could just use a plain cypher query instead:
		// const session = driver.session()
		// session.run(`MATCH (n:Node) RETURN n`)
		//     .then(res => {
		//         return res.records.map(row => row.get('n').properties)
		//     })
		//     .then(data => socket.emit('welcome', data))

		socket.on('disconnect', () => console.log(`<-- LEFT  : ${socket.id}`));

		return io;
	});

	// Listen for Kafka
	/*
    consumer.on('message', ({ value, }) => {
        // Parse the JSON value into an object
        const { payload, } = JSON.parse(value)

        // Get the properties from the update
        const { properties, } = payload.after

        // ... and the status
        const { status, } = properties

        console.log('\n\nemitting from kafka:', status, properties)

        // Emit the message through all connected sockets
        io.emit(status, properties)
    })
    */
}
