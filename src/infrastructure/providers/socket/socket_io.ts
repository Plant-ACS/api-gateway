import { Socket as SocketIO, Server as SocketServer } from "$socket"
import { ISocket } from "@app/ports/providers/socket.ts"

export default class Socket implements ISocket {
	private static instance: Socket
	private readonly host: string = Deno.env.get("HOST") || "localhost"
	private readonly port: number = Deno.env.get("PORT_SOCKET") ? parseInt(Deno.env.get("PORT_SOCKET")!) : 3000
	private readonly server = new SocketServer(this.port)
	private isListening = false
	private middlewares: {[key: string]: (data: any, socket: SocketIO, next: () => void) => void} = {}
	private connections: {
		[key: string]: (data: any, socket: SocketIO) => void
	} = {};
	constructor() {
		if (Socket.instance)
			return Socket.instance
		Socket.instance = this
	}

	public listen(callback?: (host: string, port: number) => void) {
		if(this.isListening)
			throw new Error("Socket already listening")

		this.isListening = true
		callback!(this.host, this.port)
		this.server.on("connection", (socket) => {
			this.handleMiddleware("connection", socket.data, socket, () => {
				this.connections["connection"]?.(socket.data, socket)
			})
			this.handleConnection(socket)
			this.handleMiddleware("disconnect", socket.data, socket, () => {
				this.connections["disconnect"]?.(socket.data, socket)
			})
		})
	}

	private handleConnection(socket: SocketIO) {
		this.middlewares["connection"]?.(socket.data, socket, () => {
			for (const key in this.connections) {
					socket.on(key, (data) => {
						this.handleMiddleware(key, data, socket, () => {
							this.connections[key](data, socket);
						})
					})
				}
		})
	}

	private handleMiddleware(key: string, data: any, socket: SocketIO, next: () => void) {
		this.middlewares[key]? this.middlewares[key](data, socket, next) : next()
	}

	public use(key: string, callback: (data: any, socket: SocketIO, next: () => void) => void) {
		if(this.middlewares[key])
			throw new Error("Key already exists")

		this.middlewares[key] = callback
	}

	public add(key: string, callback: (data: any, socket: SocketIO) => void) {
		if(this.connections[key])
			throw new Error("Key already exists")

		this.connections[key] = callback
	}

	public remove(key: string) {
		if(!this.connections[key])
			throw new Error("Key not found")

		delete this.connections[key]
	}

	public get(key: string) {
		if(!this.connections[key])
			throw new Error("Key not found")

		return this.connections[key]
	}
}
