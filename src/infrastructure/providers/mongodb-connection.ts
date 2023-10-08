import mongoose from 'mongoose'
let connection: typeof mongoose|null = null

async function startConnection() {
	connection = await mongoose.connect("mongodb+srv://root-solis:E17FCsvnyh7oH4jM@solis.imfvv3c.mongodb.net/?retryWrites=true&w=majority")
}

async function getConnectionDB() {
	if (connection == null)
		await startConnection()
	if(connection != null)
		return connection
	throw new Error('Connection not started')
}

export default getConnectionDB
