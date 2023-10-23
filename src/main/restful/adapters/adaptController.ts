import { IController, IRequest, IResponse } from "@app/ports/presentation/mod.ts"

export function adaptController(controller: IController) {
	return async (req: IRequest): Promise<IResponse> => await controller.handle(req)
		.then((response: IResponse) => ({ statusCode: response.statusCode, body: response.body }))
		.catch((error: Error) => ({ statusCode: 500, body: error.message }))
}
