import { IReport } from "@entities"

export type TUpdateReportDTO = {
	readonly id: IReport["id"]
} & Partial<Omit<IReport, "id">>

export interface IUpdateReportRepository {
	update: (data: TUpdateReportDTO) => Promise<IReport>
}
