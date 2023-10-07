import { express } from "@infra/providers/restful/mod.ts"
import routerEsp from "@main/restful/routes/esp.ts"

export default function StartRestFul() {
	const server = new express.RestFul()

	server.use("/esp", routerEsp)

	server.listen()
}
