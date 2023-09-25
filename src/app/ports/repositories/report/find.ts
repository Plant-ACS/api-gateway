import { IReport } from "@entities"
export type TFindReportSearchDTO = {

	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
} & Partial<Omit<IReport, "id">>

export interface IFindReportRepository {
	findById: (data: IReport["id"]) => Promise<IReport>
	findSearch: (data: TFindReportSearchDTO) => Promise<IReport[]>
	findAll: () => Promise<IReport[]>
}
