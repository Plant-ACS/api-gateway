import { IUser } from "@entities"
import { IUserRepository, TAlterEmailDTO, TEmailAlreadyExistsDTO, TFindUserSearchDTO, TUpdateUserDTO } from "@app/ports/repositories/mod.ts"
import { InternalServerError } from "@app/errors/internal-server-error.ts"
import UserDB from "./models/user.ts"
import { IRecoverPasswordDTO } from "../../../app/ports/repositories/user/recover-password.ts";

export class UserRepository implements IUserRepository {
	async alterEmail(data: TAlterEmailDTO): Promise<void> {
		if (!await this.findById(data.id)) throw new Error("User not found")
		if (await this.emailAlreadyExists({email: data.newEmail})) throw new Error("Email already in use")
		await UserDB.update({
			_id: data.id,
			$set: {
				email: data.newEmail
			}
 		})
	}
	async save(data: Omit<IUser,"id">): Promise<IUser> {
		if (await this.emailAlreadyExists) throw new Error("User already exists")

		return await UserDB.insertOne(data)
	}
	async delete(data: string): Promise<void> {
		if (!await this.findById(data)) throw new Error("User not found")

		await UserDB.deleteOne({ _id: data })
	}
	async forgotPassword(data: IUser["email"]): Promise<void> {
		if (!await this.emailAlreadyExists) throw new Error("User not found")

		// send the email, but nothing is changed in the database
	}
	async recoverPassword(data: IRecoverPasswordDTO): Promise<void> {
		if (!data.token || !data.password) throw new Error("Invalid information")

		await UserDB.update({
			_id: data.id,
			$set: {
				password: data.password
			}
		})
	}
	async emailAlreadyExists(data: TEmailAlreadyExistsDTO): Promise<boolean> {
		try {
			if ((await this.findSearch({
				email: data.email,
				filter: {
					order: "ASC",
					limit: 1,
					page: 1
				}
			})).length > 0) return true

			return false
		}
		catch (_error) {
			throw new InternalServerError("Error in verifying the database")
		}
	}
	async findById(data: IUser["id"]): Promise<IUser> {
		return await UserDB.findById({ _id: data })
	}
	async findSearch(data: TFindUserSearchDTO): Promise<IUser[]> {
		return await UserDB.findMany({
			username: data.username,
			email: data.email,
			filter: {
				order: "ASC",
				limit: 1,
				page: 1
			}
		})
	}
	async findAll(): Promise<IUser[]> {
		return await UserDB.find({})
	}
	async update(data: TUpdateUserDTO): Promise<IUser> {
		if (await this.findById(data.id)) throw new Error("User not found")
		if (!data.username) throw new Error("Invalid information")
		return await UserDB.update({
			_id: data.id,
			$set: {
				username: data.username
			}
		})
	}
}
