import { Socket, Server as SocketServer } from "$socket"

export default class Socket_IO {
	private static instance: Socket_IO
	private readonly host: string = Deno.env.get("HOST") || "localhost"
	public readonly port: number = Deno.env.get("PORT_SOCKET") ? parseInt(Deno.env.get("PORT_SOCKET")!) : 3000
	public readonly server = new SocketServer(this.port)
	private isListening = false
	private middlewares: {[key: string]: (data: any, socket: Socket, next: () => void) => void} = {}
	private connections: {
		[key: string]: (data: any, socket: Socket) => void
	} = {};
	constructor() {
		if (Socket_IO.instance)
			return Socket_IO.instance
		Socket_IO.instance = this
	}

	public listen() {
		if(this.isListening)
			throw new Error("Socket already listening")

		this.isListening = true
		console.log(`Socket listening on port ${this.port}`)
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

	private handleConnection(socket: Socket) {
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

	private handleMiddleware(key: string, data: any, socket: Socket, next: () => void) {
		this.middlewares[key]? this.middlewares[key](data, socket, next) : next()
	}

	public use(key: string, callback: (data: any, socket: Socket, next: () => void) => void) {
		if(this.middlewares[key])
			throw new Error("Key already exists")

		this.middlewares[key] = callback
	}

	public add(key: string, callback: (data: any, socket: Socket) => void) {
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
