import { type IACSAlreadyExists } from "./already-exists.ts"
import { type ISaveACSRepository } from "./save.ts"
import { type IDeleteACSRepository } from "./delete.ts"
import { type IFindACSRepository } from "./find.ts"
import { type IUpdateACSRepository } from "./update.ts"

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
