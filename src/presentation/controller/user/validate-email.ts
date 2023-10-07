import { IValidateEmail } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class ValidateEmailController implements IController {
		constructor(
			private readonly validationBody: IValidator,
			private readonly validateEmail: IValidateEmail
			){}
		async handle(request: IRequest): Promise<IResponse> {
				try {
						const error = await this.validationBody.validate(request.body);
						if (error) return error;

						await this.validateEmail.validateEmail(request.body);
						return ({
								statusCode: 200,
								body: { message: "Email validated" }
						});
				}
				catch (error) {
						return new InternalServerError(error.message);
				}
		}
}
