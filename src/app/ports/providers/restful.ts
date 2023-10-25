import { IResponse } from "@app/ports/presentation/response.ts";
import { IRequest } from "@app/ports/presentation/request.ts";

export interface ILogger {
	info: (message: string) => void,
	error: (message: string) => void,
	warn: (message: string) => void,
}

export type IRequestCallback = (req: IRequest) => Promise<IResponse>
export type IMiddlewareCallback = (req: IRequest, next: () => void) => Promise<IResponse>

export interface IRouter {
	use(path: string, callback: (IMiddlewareCallback | IRouter)): void,
	get(path: string, callback: IRequestCallback): void,
	post(path: string, callback: IRequestCallback): void,
	put(path: string, callback: IRequestCallback): void,
	delete(path: string, callback: IRequestCallback): void
}

export interface IRestFul {
	listen(callback?: (host: string, port: number) => void): void
	use(path: string, callback: (IMiddlewareCallback | IRouter)): void,
	get(path: string, callback: IRequestCallback): void,
	post(path: string, callback: IRequestCallback): void,
	put(path: string, callback: IRequestCallback): void,
	delete(path: string, callback: IRequestCallback): void
}
