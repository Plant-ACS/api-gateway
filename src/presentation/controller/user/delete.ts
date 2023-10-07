import { IDeleteUser } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class DeleteUserController implements IController {
	constructor(
		private readonly validationParameter: IValidator,
		private readonly deleteUser: IDeleteUser
	) {}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = await this.validationParameter.validate(request.params)

			if (error) return error

			return ({
				statusCode: 204,
				body: "User deleted successfully"
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
