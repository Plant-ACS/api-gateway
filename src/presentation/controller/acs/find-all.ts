import { IFindACS } from "@use-cases"
import { IController, IResponse } from "@app/ports/presentation/mod.ts"
import { InternalServerError } from "@app/errors/mod.ts"

export class FindAllACSController implements IController {
  constructor(
    private readonly findAllACS: IFindACS
  ) {}

  async handle(): Promise<IResponse> {
    try {
      return ({
        statusCode: 200,
        body: await this.findAllACS.findAll()
      })
    }
    catch (error) {
      return new InternalServerError(error.message)
    }
  }
}
