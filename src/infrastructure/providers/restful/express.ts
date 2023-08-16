//@deno-types="npm:@types/express@4"
import express from "$express"
import { IRestFul } from "@app/ports/providers/restful.ts"

export class Router {
	public readonly router = express.Router()

	public use(path: string, callback: (req: express.Request, res: express.Response, next: express.NextFunction) => void | Router): void {
		if(callback instanceof Router)
			this.router.use(path, callback.router)
		else
			this.router.use(path, callback)
	}

	public get(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.router.get(path, callback)
	}

	public post(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.router.post(path, callback)
	}

	public put(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.router.put(path, callback)
	}

	public delete(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.router.delete(path, callback)
	}
}

export default class RestFul implements IRestFul {
	private static instance: RestFul
	private readonly host: string = Deno.env.get("HOST") || "localhost"
	private readonly port: number = Deno.env.get("PORT_REST") ? parseInt(Deno.env.get("PORT_REST")!) : 3030
	private isListening = false
	private readonly app: express.Application = express()

	private constructor() {
		if(RestFul.instance) return RestFul.instance
		RestFul.instance = this
	}

	public listen(callback?: (host: string, port: number) => void): void {
		if(this.isListening)
			throw new Error("RestFull already listening")

		this.isListening = true

		this.app.listen(this.port, () => callback!(this.host, this.port))
	}

	public use(path?: string, callback?: (req: express.Request, res: express.Response, next: express.NextFunction) => void | Router): void {
		if(callback instanceof Router)
			this.app.use(path!, callback.router)
		else
			this.app.use(path!, callback!)
	}

	public get(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.app.get(path, callback)
	}

	public post(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.app.post(path, callback)
	}

	public put(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.app.put(path, callback)
	}

	public delete(path: string, callback: (req: express.Request, res: express.Response) => void): void {
		this.app.delete(path, callback)
	}
}
