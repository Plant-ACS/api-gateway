import getConnectionDB from "../config/connection.ts"

const { Schema, model } = await getConnectionDB()

const ESPSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	ports: {
		type: Array<{
			key: Number | Number[],
			module: String
		}>,
		required: true
	}
})

const ESPDB = model("IESP", ESPSchema)
export default ESPDB
