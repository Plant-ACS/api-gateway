import sockets from "@infra/providers/socket/mod.ts"

const socket = new sockets.socket_IO.Socket()

socket.add("message", (message: string) => {
	console.log(message)
})

socket.listen((host, port) => {
	console.log(`Socket listening on ${host}:${port}`)
})
