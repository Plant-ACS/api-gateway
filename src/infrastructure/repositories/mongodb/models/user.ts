import getConnection from "../config/connection.ts"
const { Schema, model } = await getConnection()

const UserSchema = new Schema({
	id: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	registeredAt: {
		type: Date,
		required: true
	}
})

const UserDB = model("IUser", UserSchema)
export default UserDB
