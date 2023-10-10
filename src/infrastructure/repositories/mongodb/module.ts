import { IModule } from "@entities"
import { type IModuleRepository } from "@app/ports/repositories/mod.ts"
import { TFindModuleSearchDTO, TUpdateModuleDTO } from "@app/ports/repositories/module/mod.ts"
import { InternalServerError } from "@app/errors/mod.ts"
import ModuleDB from "@infra/rep/mongodb/models/module.ts"

export class ModuleRepository implements IModuleRepository {
	async alreadyExists(data: Omit<IModule,"id">): Promise<boolean> {
		try {
			if ((await this.findSearch({
				name: data.name,
				isAnalog: data.isAnalog,
				isDigital: data.isDigital,
				maxVoltage: data.maxVoltage,
				pinAmount: data.pinAmount,
				filter: {
					order: "ASC",
					limit: 1,
					page: 1
				}
			})).length > 0) return true

			return false
		}
		catch (_error) {
			throw new InternalServerError("Error in verifying database")
		}
	}

	async save(data: Omit<IModule,"id">): Promise<IModule> {
		if (await this.alreadyExists(data)) throw new Error("Module already exists")

		return await ModuleDB.insertOne(data)
			.then((data) => data as unknown as IModule)
			.catch((_error) => {
				throw new InternalServerError("Error in creating Module")
			})
	}

	async delete(data: string): Promise<void> {
		if (!await this.findById(data)) throw new Error("Module not found")

		await ModuleDB.deleteOne({ _id: data })
	}

	async findById(data: string): Promise<IModule> {
		return await ModuleDB.findById({ _id: data })
			.then((data) => data as unknown as IModule)
			.catch((_error) => {
				throw new InternalServerError("Error in finding Module in database")
			})
	}

	async findSearch(data: TFindModuleSearchDTO): Promise<IModule[]> {
		return await ModuleDB.findMany({
			name: data.name,
			isAnalog: data.isAnalog,
			idDigital: data.isDigital,
			maxVoltage: data.maxVoltage,
			pinAmount: data.pinAmount,
			filter: {
				oder: "ASC",
				limit: 1,
				page: 1
			}
		})
	}

	async findAll(): Promise<IModule[]> {
		return await ModuleDB.find({})
			.then((data) => data as unknown as IModule)
			.cahtch((_error) => {
				throw new InternalServerError("Error in finding Module in database")
			})
	}

	async update (data: TUpdateModuleDTO): Promise<IModule> {
		if (!await this.findById(data.id)) throw new Error("Module not found")

		return await ModuleDB.findByIdAndUpdate({
			_id: data.id,
			$set: {
				name: data.name,
				isAnalog: data.isAnalog,
				isDigital: data.isDigital,
				maxVoltage: data.maxVoltage,
				pinAmount: data.pinAmount
			}
		})
		.then((data) => data as unknown as IModule)
		.catch((_error) => {
			throw new InternalServerError("Error in updating database")
		})
	}

}
