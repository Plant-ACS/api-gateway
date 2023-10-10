import getConnectionDB from "../config/connection.ts"
const { Schema, model } = await getConnectionDB()

const ModuleSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	isAnalog: {
		type: Boolean,
		required: true
	},
	isDigital: {
		type: Boolean,
		required: true
	},
	maxVoltage: {
		type: Number,
		required: false
	},
	pinAmount: {
		type: Number,
		required: true
	}
})

const ModuleDB = model("IModule", ModuleSchema)
export default ModuleDB
