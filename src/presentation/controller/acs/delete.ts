import { IDeleteACS } from "@use-cases"
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class DeleteACSController implements IController {
	constructor(
		private readonly validationParameters: IValidator,
		private readonly deleteACS: IDeleteACS
	) {}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = this.validationParameters.validate(request.params)

			if (error)
				return error

			await this.deleteACS.delete(request.params.id)

			return ({
				statusCode: 204,
				body: "ACS deleted successfully"
			})
		}
		catch(error) {
			return new InternalServerError(error)
		}
	}
}
