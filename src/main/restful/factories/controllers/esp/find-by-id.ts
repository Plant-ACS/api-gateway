import { FindESPByIdController } from "@pre/controller/mod.ts";
import { FindESP } from "@app/use-cases/esp/find.ts";
import { findESPRepository } from "@infra/rep/mod.ts";
import { RequiredValidator } from "@pre/validation/required.ts";

export const FindESPByIdControllerFactory = (): FindESPByIdController => {
	return new FindESPByIdController(
		new RequiredValidator("id"),
		new FindESP(findESPRepository)
	)
}
