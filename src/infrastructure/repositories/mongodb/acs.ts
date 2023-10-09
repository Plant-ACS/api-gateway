import { IACS } from "@entities"
import ACSDB from "@infra/rep/mongodb/models/acs.ts"
import { IFindSearchACSDTO, TUpdateACSDTO } from "@use-cases"
import { type IACSRepository } from "@app/ports/repositories/mod.ts"
import { InternalServerError } from "@app/errors/internal-server-error.ts"

export class ACSRepository implements IACSRepository {
	async alreadyExists(data: Omit<IACS,"id">): Promise<boolean> {
		try {
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
			) return true

			return false
		}
		catch (_error) {
			throw new InternalServerError("Error in verifying database")
		}
	}
	async save(data: Omit<IACS, "id">): Promise<IACS> {
		if (await this.alreadyExists)
			throw new Error("ACS already exists")

		return await ACSDB.insertOne(data)
			.then((data) => data as unknown as IACS)
			.catch((_error) => {
				throw new InternalServerError("Error in creating ACS")
			})
	}

	async delete(data: IACS["id"]): Promise<void> {

		if (!await this.findById(data)) throw new Error("ACS not found")

		await ACSDB.deleteOne({ _id: data })
	}

	async findById(data: IACS["id"]): Promise<IACS> {
		return await ACSDB.findOne({ _id: data })
			.then((data) => data as unknown as IACS)
			.catch((_error) => {
				throw new InternalServerError("Error in finding ACS in the database")
			})
	}

	async findSearch(data: IFindSearchACSDTO): Promise<IACS[]> {
		return await ACSDB.findMany({
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
		return await ACSDB.find({})
	}

	async update(data: TUpdateACSDTO): Promise<IACS> {
		if (!await this.findById(data.id)) throw new Error("ACS not found")
		if (!data.name && !data.espId) throw new Error("Invalid information")

		return await ACSDB.findByIdAndUpdate({
			_id: data.id,
			$set: {
				name: data.name,
				espId: data.espId
			}
		}).then((data) => data as unknown as IACS)
		.catch((_error) => {
			throw new InternalServerError("Error in updating the database")
		})
	}
}
