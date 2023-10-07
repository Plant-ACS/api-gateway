import { IFindESP } from "@use-cases";
import { InternalServerError } from "@app/errors/mod.ts";
import { IController, IResponse } from "@app/ports/presentation/mod.ts";

export class FindAllESP implements IController {
	constructor(
		private readonly findAllESP: IFindESP
	){}

	async handle(): Promise<IResponse> {
		try {
			return ({
				statusCode: 200,
				body: await this.findAllESP.findAll()
			})
		}
		catch(error) {
			return new InternalServerError(error.message)
		}
	}
}
