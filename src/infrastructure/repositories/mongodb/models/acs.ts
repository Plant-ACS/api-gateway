import getConnectionDB from "../config/connection.ts"
const { Schema, model } = await getConnectionDB()

const ACSSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
	espId: {
		type: Number,
		required: true
	},
	createdAt: {
		type: Date,
		required: true
	}
})

const ACSDB = model("ACS", ACSSchema)
export default ACSDB
