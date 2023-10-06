import { IController, IRequest, IResponse } from "@app/ports/presentation/mod.ts"

export function adaptController(controller: IController) {
	return async (req: IRequest): Promise<IResponse> => await controller.handle(req)
}
