import getConnectionDB from "../config/connection.ts"
const { Schema, model } = await getConnectionDB()

const ESPSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	ports: {
		type: Array<{
			key: number | number[],
			module: string
		}>,
		required: true
	}
})

const ESPDB = model("IESP", ESPSchema)
export default ESPDB
