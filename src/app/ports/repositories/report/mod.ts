import { IReportAlreadyExistsRepository } from "./already-exists.ts"
import { ISaveReportRepository } from "./save.ts"
import { IDeleteReportRepository } from "./delete.ts"
import { IFindReportRepository } from "./find.ts"
import { IUpdateReportRepository } from "./update.ts"

export * from "./already-exists.ts"
export * from "./save.ts"
export * from "./delete.ts"
export * from "./find.ts"
export * from "./update.ts"

type IReportRepository =
	IReportAlreadyExistsRepository &
	ISaveReportRepository &
	IDeleteReportRepository &
	IFindReportRepository &
	IUpdateReportRepository

export type {
	IReportRepository,
	IReportAlreadyExistsRepository,
	ISaveReportRepository,
	IDeleteReportRepository,
	IFindReportRepository,
	IUpdateReportRepository
}
