import { IDeleteACS } from "@use-cases"
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class DeleteACSController implements IController {
	constructor(
		private readonly validationParameters: IValidator,
		private readonly deleteACS: IDeleteACS
	) {}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = this.validationParameters.validate(request.params)

			if (error) throw error

			await this.deleteACS.delete(request.params.id)

			return ({
				statusCode: 200,
				body: "ACS deleted successfully"
			})
		}
		catch(_error) {
			return ({
				statusCode: 400,
				body: "ACS could not be deleted"
			})
		}
	}
}
