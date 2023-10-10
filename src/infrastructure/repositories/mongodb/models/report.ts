import getConnectionDB from "@infra/rep/mongodb/config/connection.ts";
const { Schema, model } = await getConnectionDB()

const ReportSchema = new Schema({
	espId: {
		type: String,
		required: true
	},
	moduleId: {
		type: String,
		required: true
	},
	generatedAt: {
		type: Date,
		required: true
	}
})

const ReportDB = model("IReport", ReportSchema)
export default ReportDB
