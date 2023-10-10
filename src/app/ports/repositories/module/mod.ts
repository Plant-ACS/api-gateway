import { IModuleAlreadyExistsRepository } from "@app/ports/repositories/module/already-exists.ts"
import { ISaveModuleRepository } from "@app/ports/repositories/module/save.ts"
import { IDeleteModuleRepository } from "@app/ports/repositories/module/delete.ts"
import { IFindModuleRepository } from "@app/ports/repositories/module/find.ts"
import { IUpdateModuleRepository } from "@app/ports/repositories/module/update.ts"

export * from "./save.ts"
export * from "./already-exists.ts"
export * from "./delete.ts"
export * from "./find.ts"
export * from "./update.ts"

type IModuleRepository =
	IModuleAlreadyExistsRepository &
	ISaveModuleRepository &
	IDeleteModuleRepository &
	IFindModuleRepository &
	IUpdateModuleRepository

export type { IModuleRepository }

