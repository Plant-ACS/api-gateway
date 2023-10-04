import { IDeleteESP } from "@use-cases"
import { InternalServerError } from "@app/errors/mod.ts"
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts"

export class DeleteESPController implements IController {
  constructor(
    private readonly validationParams: IValidator,
    private readonly deleteESP: IDeleteESP
  ){}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const error = this.validationParams.validate(request.params)

      if (error) return error
      
      await this.deleteESP.delete(request.params)

      return ({
        statusCode: 204,
        body: "ESP Deleted successfully"
      })
    }
    catch(error) {
      return new InternalServerError(error)
    }
  }
}