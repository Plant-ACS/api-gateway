import { IFindReport } from '@use-cases';
import { InternalServerError } from '@app/errors/mod.ts';
import { IController, IRequest, IResponse, IValidator } from '@app/ports/presentation/mod.ts'

export class FindReportByIdController implements IController {
	constructor(
		private readonly validationParameter: IValidator,
		private readonly findReportById: IFindReport
	){}

	async handle(request: IRequest): Promise<IResponse> {
		try {
			const error = this.validationParameter.validate(request.params)

			if (error) return error

			return ({
				statusCode: 200,
				body: await this.findReportById.findById(request.params.id)
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
