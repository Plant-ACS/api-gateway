import { FindAllESPController } from '@pre/controller/mod.ts'
import { FindESP } from '@app/use-cases/esp/find.ts'
import { findESPRepository } from '@infra/rep/mod.ts'

export const FindAllESPControllerFactory = (): FindAllESPController => {
	return new FindAllESPController(
		new FindESP(findESPRepository)
	)
}
