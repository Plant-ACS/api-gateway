import Socket_IO from "@main/socket.ts"
import { Socket } from "$socket"

const socket = new Socket_IO()

socket.add("connection", (socket: Socket) => {
		socket.on("message", (message: string) => {
				console.log(message)
		})
})
