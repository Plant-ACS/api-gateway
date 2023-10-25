import { UpdateESPController } from "@pre/controller/mod.ts"
import { CompositeValidation, RequiredValidator } from "@pre/validation/mod.ts"
import { UpdateESP } from "@app/use-cases/esp/mod.ts"
import { findESPRepository, updateESPRepository } from "@infra/rep/mod.ts"

export const UpdateESPControllerFactory = (): UpdateESPController => {
  return new UpdateESPController(
    new CompositeValidation([
      new RequiredValidator("id"),
      new RequiredValidator("userId"),
      new CompositeValidation([
        new RequiredValidator("ports[key]"),
        new RequiredValidator("ports[module]")
      ])
    ]),
    new UpdateESP(findESPRepository, updateESPRepository)
  )
}