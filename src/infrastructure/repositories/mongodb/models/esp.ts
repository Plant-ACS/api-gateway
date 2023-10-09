import getConnectionDB from "../config/connection.ts"

const { Schema, model } = await getConnectionDB()

const ESPSchema = new Schema({
	userId: {
		type: String,
		required: true
	}

})
