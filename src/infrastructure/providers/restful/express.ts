//@deno-types="npm:@types/express@4"
import express from "$express"
import { ILogger, IRestFul } from "@app/ports/providers/restful.ts"
import { IRequest, IResponse } from "@app/ports/presentation/mod.ts";
function adaptCallback(callback: (req: IRequest) => IResponse) {
	return (req: express.Request, res: express.Response) => {
		try {
			const response = callback(req)
			adaptResponse(response, res)
		} catch(error) {
			res.status(500).json({ message: "error internal in adaptCallback" })
		}
	}
}

function adaptMiddleware(callback: (req: IRequest, next: () => void) => IResponse) {
	return (req: express.Request, res: express.Response, next: express.NextFunction) => {
		try {
			const response = callback(req, next)
			adaptResponse(response, res)
		} catch(error) {
			res.status(500).json({ message: "error internal in adaptMiddleware" })
		}
	}
}

function adaptResponse(res: IResponse, resAdapt: express.Response): void {
	if(typeof res.body == "string")
		resAdapt.status(res.statusCode).send(res.body)
	else
		resAdapt.status(res.statusCode).json(res.body)
}

export class Router {
	public readonly router = express.Router()

	public use(path: string, callback: ((req: IRequest) => IResponse) | Router): void {
		if(callback instanceof Router)
			this.router.use(path, callback.router)
		else
			this.router.use(path, adaptMiddleware(callback))
	}

	public get(path: string, callback: (req: IRequest) => IResponse): void {
		this.router.get(path, adaptCallback(callback))
	}

	public post(path: string, callback: (req: IRequest) => IResponse): void {
		this.router.post(path, adaptCallback(callback))
	}

	public put(path: string, callback: (req: IRequest) => IResponse): void {
		this.router.put(path, adaptCallback(callback))
	}

	public delete(path: string, callback: (req: IRequest) => IResponse): void {
		this.router.delete(path, adaptCallback(callback))
	}
}

export default class RestFul implements IRestFul {
	private static instance: RestFul
	private readonly host: string = Deno.env.get("HOST") || "localhost"
	private readonly port: number = Deno.env.get("PORT_REST") ? parseInt(Deno.env.get("PORT_REST")!) : 3030
	private isListening = false
	private readonly app: express.Application = express()

	public constructor(
		private readonly router?: Router,
		private readonly logger?: ILogger,
		private readonly debug: boolean = false
	) {
		if(RestFul.instance) return RestFul.instance
		RestFul.instance = this

		if(this.router)
			this.app.use(router!.router)

		this.app.use(express.json())
	}

	public listen(callback?: (host: string, port: number) => void): void {
		if(this.isListening)
			throw new Error("RestFull already listening")

		this.isListening = true

		if(!callback)
			callback = (host, port) => console.log(`Server restful listening on http://${host}:${port}`)

		this.app.listen(this.port, () => callback!(this.host, this.port))
	}

	public use(path: string, callback: ((req: IRequest, next: () => void) => IResponse) | Router): void {
		if(callback! instanceof Router) {
			this.app.use(path, callback.router)
			console.log("Router")
		} else
			this.app.use(path, adaptMiddleware(callback))
	}

	public get(path: string, callback: (req: IRequest) => IResponse): void {
		this.app.get(path, adaptCallback(callback))
	}

	public post(path: string, callback: (req: IRequest) => IResponse): void {
		this.app.post(path, adaptCallback(callback))
	}

	public put(path: string, callback: (req: IRequest) => IResponse): void {
		this.app.put(path, adaptCallback(callback))
	}

	public delete(path: string, callback: (req: IRequest) => IResponse): void {
		this.app.delete(path, adaptCallback(callback))
	}
}
