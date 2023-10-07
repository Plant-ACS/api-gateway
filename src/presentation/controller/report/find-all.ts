import { IFindReport } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IResponse } from "@app/ports/presentation/mod.ts";

export class FindAllReports implements IController {
	constructor (
		private readonly findAll: IFindReport
	){}

	async handle(): Promise<IResponse> {
		try {
			return ({
				statusCode: 200,
				body: await this.findAll.findAll()
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
