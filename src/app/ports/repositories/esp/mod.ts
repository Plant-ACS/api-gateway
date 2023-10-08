import { IESPAlreadyExistsRepository } from "@app/ports/repositories/esp/already-exists.ts"
import { ISaveESPRepository } from "@app/ports/repositories/esp/save.ts"
import { IDeleteESPRepository } from "@app/ports/repositories/esp/delete.ts"
import { IFindESPRepository } from "@app/ports/repositories/esp/find.ts"
import { IUpdateESPRepository } from "@app/ports/repositories/esp/update.ts"

export * from "./already-exists.ts"
export * from "./save.ts"
export * from "./delete.ts"
export * from "./find.ts"
export * from "./update.ts"

type IESPRepository =
	IESPAlreadyExistsRepository &
	ISaveESPRepository &
	IDeleteESPRepository &
	IFindESPRepository &
	IUpdateESPRepository

export type {
	IESPRepository,
	IESPAlreadyExistsRepository,
	ISaveESPRepository,
	IDeleteESPRepository,
	IFindESPRepository,
	IUpdateESPRepository
}
