import { IReport } from "@entities"

export type TFindReportByIdDTO = IReport["id"]

export interface IFindReportSearchDTO {
	espId?: IReport["espId"],
	moduleId?: IReport["moduleId"],
	generatedAt?: IReport["generatedAt"],
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
}

export interface IFindReport {
	findById: (data: TFindReportByIdDTO) => Promise<IReport>
	findSearch: (data: IFindReportSearchDTO) => Promise<IReport[]>
	findAll: () => Promise<IReport[]>
}
