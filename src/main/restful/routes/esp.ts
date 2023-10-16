import { express } from "@infra/providers/restful/mod.ts"
import { adaptController } from "@main/restful/adapters/adaptController.ts"
import { CreateESPController } from "@pre/controller/esp/mod.ts"


const routerEsp = new express.Router()

routerEsp.post("/",
	adaptController()
)

export default routerEsp
