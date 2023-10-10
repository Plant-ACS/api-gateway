import { type IACSAlreadyExists } from "./already-exists.ts"
import { type ISaveACSRepository } from "./save.ts"
import { type IDeleteACSRepository } from "./delete.ts"
import { type IFindACSRepository } from "./find.ts"
import { type IUpdateACSRepository } from "./update.ts"

export * from "./already-exists.ts"
export * from "./save.ts"
export * from "./delete.ts"
export * from "./find.ts"
export * from "./update.ts"

type IACSRepository =
	IACSAlreadyExists &
	ISaveACSRepository &
	IDeleteACSRepository &
	IFindACSRepository &
	IUpdateACSRepository

export type {
	IACSRepository,
	IACSAlreadyExists,
	ISaveACSRepository,
	IDeleteACSRepository,
	IFindACSRepository,
	IUpdateACSRepository,
}
