import { type IRequest, type IResponse } from "./mod.ts"

export interface IMiddleware {
  handle: (request: IRequest, next: () => void) => IResponse | any
}
