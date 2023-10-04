import { ICreateACS } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts"
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class CreateACSController implements IController {
	constructor(
 		private readonly validationBody: IValidator,
		private readonly createACSController: ICreateACS
	) {}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = this.validationBody.validate(request.body)

			if (error) throw error

			return ({
				statusCode: 200,
				body: await this.createACSController.create(request.body)
			});
		}
		catch(error) {
			return new InternalServerError(error)
		}
	}
}
