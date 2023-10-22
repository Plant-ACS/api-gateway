import { CreateESP } from "@app/use-cases/esp/create.ts";
import { CreateESPController } from "@pre/controller/mod.ts"
import { CompositeValidation } from "@pre/validation/composite.ts";
import { RequiredValidator, TypeFieldValidator} from "@pre/validation/mod.ts";
import { StringType } from "@pre/validation/types/string.ts";
import { alreadyExistsReposiory, saveESPRepository } from "@infra/repositories/mod.ts"

export const CreateESPControllerFactory = (): CreateESPController => {
  return new CreateESPController(
    new CompositeValidation([
      new RequiredValidator("userId"),
      new RequiredValidator("ports"),
      new TypeFieldValidator("userId", [new StringType()]),
    ]),
    new CreateESP(alreadyExistsReposiory, saveESPRepository)
	)
}
