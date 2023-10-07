import { ICreateReport } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IRequest, IResponse, IValidator } from "@app/ports/presentation/mod.ts";

export class CreateReportController implements IController {
		constructor(
			private readonly validationBody: IValidator,
			private readonly createReport: ICreateReport
		) {}
		async handle(request: IRequest): Promise<IResponse> {
				try {
						const error = this.validationBody.validate(request.body);

						if (error) return error;

						return ({
								statusCode: 201,
								body: await this.createReport.create(request.body)
						});
				}
				catch (error) {
						return new InternalServerError(error.message);
				}
		}
}
