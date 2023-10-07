import { IFindUser } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class FindUserSearchController implements IController {
	constructor (
		private readonly validationParameter: IValidator,
		private readonly findUserSearch: IFindUser
	){}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = this.validationParameter.validate(request.params)

			if (error) return error

			return ({
				statusCode: 200,
				body: await this.findUserSearch.findSearch(request.params)
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
