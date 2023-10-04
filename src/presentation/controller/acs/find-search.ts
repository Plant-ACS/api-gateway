import { IFindACS } from "@use-cases"
import { InternalServerError } from "@app/errors/mod.ts"
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts"

export class FindSearchACSController implements IController {
  constructor(
    private readonly validationBody: IValidator,
    private readonly findSearchACS: IFindACS
  ){}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const error = this.validationBody.validate(request.body)
      
      if (error) return error

      return ({
        statusCode: 200,
        body: await this.findSearchACS.findSearch(request.body)
      })

    }
    catch (error) {
      return new InternalServerError(error)
    }

  }
}