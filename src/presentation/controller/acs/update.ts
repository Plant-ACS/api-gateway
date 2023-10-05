import { IUpdateACS } from "@use-cases"
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts"
import { InternalServerError } from "@app/errors/internal-server-error.ts"

export class UpdateACSController implements IController {
  constructor(
    private readonly validationBody: IValidator,
    private readonly updateACS: IUpdateACS
  ){}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const error = await this.validationBody.validate(request.body)

      if (error) return error

      return ({
        statusCode: 200,
        body: await this.updateACS.update(request.body)
      })
    }
    catch (error) {
      return new InternalServerError(error.message)
    }
  }
}
