import { ICreateACS } from "@use-cases";
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
		catch(_error) {
			return ({
				statusCode: 400,
				body: "ACS could not be created" // error.message
			})
		}
	}
}
