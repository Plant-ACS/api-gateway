import { IUpdateUser } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class UpdateUserController implements IController {
	constructor (
		private readonly validationBody: IValidator,
		private readonly updateUser: IUpdateUser
	){}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = await this.validationBody.validate(request.body)

			if (error) return error

			return ({
				statusCode: 200,
				body: await this.updateUser.update(request.body)
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
