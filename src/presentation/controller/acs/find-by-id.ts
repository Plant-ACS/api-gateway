import { IFindACS } from "@use-cases"
import { InternalServerError } from "@app/errors/mod.ts"
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts"

export class FindACSByIdController implements IController {
    constructor(
        private readonly validationParameters: IValidator,
        private readonly findACSByID: IFindACS
    ){}

    async handle(request: IRequest): Promise<IResponse> {
        try {
            const error = this.validationParameters.validate(request.params)

            if (error) throw error

            return ({
                statusCode: 200,
                body: await this.findACSByID.findById(request.params)
            })
        }
        catch (error) {
            return new InternalServerError(error.message);
        }
    }
}
