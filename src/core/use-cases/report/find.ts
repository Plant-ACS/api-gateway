import { IReport } from "@entities"

export type TFindReportDTO = IReport["id"]

export type TFilterReport = {
	order: "ASC" | "DESC"
}

export interface IFindReport {
	findById: (data: TFindReportDTO) => Promise<IReport>
	findAll: () => Promise<IReport[]>
}
