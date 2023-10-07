import { IRecoverPassword } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts"

export class RecoverPasswordController implements IController {
	constructor (
		private readonly validationBody: IValidator,
		private readonly recoverPassword: IRecoverPassword
	){}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = await this.validationBody.validate(request.body)

			if (error) return error

			await this.recoverPassword.recoverPassword(request.body)

			return ({
				statusCode: 200,
				body: "Password recovered successfully"
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
