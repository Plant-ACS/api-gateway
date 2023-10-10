import { IESP } from "@entities"
import { type IESPRepository } from "@app/ports/repositories/mod.ts"
import { TFindESPSearchDTO, TUpdateESPDTO } from "@app/ports/repositories/esp/mod.ts"
import { InternalServerError } from "@app/errors/mod.ts"
import ESPDB from "@infra/rep/mongodb/models/esp.ts"

export class ESPRepository implements IESPRepository {
	async alreadyExists(data: Omit<IESP, "id">): Promise<boolean> {
		try {
			if ((await this.findSearch({
					userId: data.userId,
					ports: data.ports,
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

	async save(data: Omit<IESP, "id">): Promise<IESP> {
		if (await this.alreadyExists(data))
			throw new InternalServerError("ESP already exists")

		return await ESPDB.insertOne(data)
			.then((data) => data as unknown as IESP)
			.catch((_error) => {
				throw new InternalServerError("Error in creating ESP")
			})
	}

	async delete(data: IESP["id"]): Promise<void> {
		if (!await this.findById(data)) throw new Error("ESP not found")

		await ESPDB.deleteOne({ _id: data })
	}

	async findById(data: IESP["id"]): Promise<IESP> {
		return await ESPDB.findById({ _id: data })
			.then((data) => data as unknown as IESP)
			.catch((_error) => {
				throw new InternalServerError("Error in finding ESP in the database")
			})
	}

	async findSearch(data: TFindESPSearchDTO): Promise<IESP[]> {
		return await ESPDB.findMany({
			userId: data.userId,
			ports: data.ports,
			filter: {
				order: "ASC",
				limit: 1,
				page: 1
			}
		})
	}

	async findAll(): Promise<IESP[]> {
		return await ESPDB.find({})
	}

	async update(data: TUpdateESPDTO): Promise<IESP> {
		if (!await this.findById(data.id))
			throw new Error("ESP not found")
		if (!data.ports)
			throw new Error("Invalid information")

			return await ESPDB.findByIdAndUpdate({
				_id: data.id,
				$set: {
					ports: data.ports
				}
			})
			.then((data) => data as unknown as IESP)
			.catch((_error) => {
				throw new InternalServerError("Error in updating the database")
			})
	}
}
