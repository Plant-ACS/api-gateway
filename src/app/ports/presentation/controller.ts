import { type IRequest, type IResponse } from "./mod.ts"

export interface IController {
  handle: (request: IRequest) => Promise<IResponse>
}
