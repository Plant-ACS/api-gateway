import { DeleteESPController } from "@pre/controller/mod.ts"
import { RequiredValidator } from "@pre/validation/required.ts"
import {
	deleteESPRepository,
	findESPRepository
} from "@infra/repositories/mod.ts"
import { DeleteESP } from "@app/use-cases/esp/delete.ts"

export const DeleteESPControllerFactory = (): DeleteESPController => {
	return new DeleteESPController(
		new RequiredValidator("id"),
		new DeleteESP(findESPRepository, deleteESPRepository)
	)
}
