import { FindESPSearchController } from "@pre/controller/mod.ts"
import { CompositeValidation } from "@pre/validation/composite.ts"
import { FindESP } from "@app/use-cases/esp/find.ts"
import { findESPRepository } from "@infra/rep/mod.ts"

export const FindESPSearchControllerFactory = (): FindESPSearchController => {
	return new FindESPSearchController(
		new CompositeValidation([]),
		new FindESP(findESPRepository)
	)
}
