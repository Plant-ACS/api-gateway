import { IReport } from "@entities"
import { type IReportRepository, TFindReportSearchDTO, TUpdateReportDTO } from "@app/ports/repositories/mod.ts"
import { InternalServerError } from "@app/errors/mod.ts"
import ReportDB from "./models/report.ts"

export class ReportRepository implements IReportRepository {
	async alreadyExists (data: Omit<IReport,"id">): Promise<boolean> {
		try {
			if ((await this.findSearch({
				espId: data.espId,
				moduleId: data.moduleId,
				generatedAt: data.generatedAt,
				filter: {
					order: "ASC",
					limit: 1,
					page: 1
				}
			})).length > 0) return true

			return false
		}
		catch (_error) {
			throw new InternalServerError("Error in verifying in the database")
		}
	}

	async save (data: Omit<IReport, "id">): Promise<IReport> {
		if (await this.alreadyExists(data)) throw new Error("Report already exists")

		return await ReportDB.insertOne(data)
	}
	async delete (data: string): Promise<void> {
		if (!(await this.findById(data))) throw new Error("Report not found")
		await ReportDB.deleteOne({ _id: data })
	}
	async findById (data: string): Promise<IReport> {
		return await ReportDB.findById({ _id: data })
	}
	async findSearch (data: TFindReportSearchDTO): Promise<IReport[]> {
		return await ReportDB.findMany({
			espId: data.espId,
			moduleId: data.moduleId,
			generatedAt: data.generatedAt,
			filter: {
				order: "ASC",
				limit: 1,
				page: 1
			}
		})
	}
	async findAll (): Promise<IReport[]> {
		return await ReportDB.find({})
	}
	async update (data: TUpdateReportDTO): Promise<IReport> {
		if (!(await this.findById(data.id))) throw new Error("Report not found")
		if (!data.espId && !data.moduleId && !data.generatedAt) throw new Error("Invalid information")

		return await ReportDB.findByIdAndUpdate({
			_id: data.id,
			$set: {
				espId: data.espId,
				moduleId: data.moduleId,
				generatedAt: data.generatedAt
			}
		})
	}

}
