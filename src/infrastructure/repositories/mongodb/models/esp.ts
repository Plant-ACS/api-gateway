import { IUser } from "@entities"
import { Schema, model } from "../config/connection.ts"

const ESPSchema = new Schema({
	userId: {
		type: String,
		required: true
	}
})
