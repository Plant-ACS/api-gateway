import { IForgotPassword } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class ForgotPasswordController implements IController {
		constructor(
			private readonly validationBody: IValidator,
			private readonly forgotPassword: IForgotPassword
		) {}
		async handle(request: IRequest): Promise<IResponse> {
				try {

						await this.forgotPassword.forgotPassword(request.body);
						return ({
								statusCode: 200,
								body: { message: "Email sent" }
						});
				}
				catch (error) {
						return new InternalServerError(error.message);
				}
		}
}
