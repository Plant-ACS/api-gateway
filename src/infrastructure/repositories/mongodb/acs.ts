import { IACS } from "@entities"
import { IFindSearchACSDTO, TUpdateACSDTO } from "@use-cases";
import { type IACSRepository } from "@app/ports/repositories/mod.ts";
import getConnectionDB from "@infra/providers/mongodb-connection.ts"
import { InternalServerError } from "@app/errors/internal-server-error.ts";

export class ACSRepository implements IACSRepository {
	async alreadyExists(data: Omit<IACS,"id">): Promise<boolean> {
		try {
			if (await this.findSearch(data)) return true

			return false
		}
		catch (error) {
			throw new InternalServerError(error.message)
		}
	}
	async save(data: Omit<IACS, "id">): Promise<IACS> {
		if (
			(await this.findSearch({
				name: data.name,
				espId: data.espId,
				createdAt: data.createdAt,
				filter: {
					order: "ASC",
					limit: 1,
					page: 1
				}
			})).length > 0
		)
		throw new Error("ACS already exists")

		const connection = await getConnectionDB()
		const database = connection.db("solis")

		return await database.collection("acs").insertOne(data)
	}

	async delete(data: IACS["id"]): Promise<void> {
		const connection = await getConnectionDB()
		const database = connection.db("solis")

		if (!await this.findById(data)) throw new Error("ACS not found")

		await database.collection("acs").deleteOne({ _id: data })
	}

	async findById(data: IACS["id"]): Promise<IACS> {
		const connection = await getConnectionDB()
		const database = connection.db("solis")

		return await database.collection("acs").findOne({ _id: data })
	}

	async findSearch(data: IFindSearchACSDTO): Promise<IACS[]> {
		const connection = await getConnectionDB()
		const database = connection.db("solis")

		return await database.collection("acs").findMany({
			name: data.name,
			espId: data.name,
			createdAt: data.createdAt,
			filter: {
				order: "ACS",
				limit: 1,
				page: 1
			}
		})

	}

	async findAll(): Promise<IACS[]> {
		const connection = await getConnectionDB()
		const database = connection.db("solis")

		return await database.collection("acs").find({})
	}

	async update(data: TUpdateACSDTO): Promise<IACS> {
		if (!await this.findById(data.id)) throw new Error("ACS not found")
		if (!data.name && !data.espId) throw new Error("Invalid information")

		const connection = await getConnectionDB()
		const database = connection.db("solis")

		// * What if (e.d) the name is not passed, therefore its null, this would set the ACS's name to null!?!
		return await database.collection("acs").updateOne({
			_id: data.id,
			$set: {
				name: data.name,
				espId: data.espId
			}
		})
	}
}
