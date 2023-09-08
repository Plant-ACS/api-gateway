import { IReport } from "@entities"

export type TUpdateReportDTO = {
	readonly id: IReport["id"]
} & Partial<Omit<IReport, "id">>

export interface IUpdateReport {
	update: (data: TUpdateReportDTO) => Promise<IReport>
}
