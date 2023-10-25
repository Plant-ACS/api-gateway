import { express } from "@infra/providers/restful/mod.ts"
import { adaptController } from "@main/restful/adapters/adaptController.ts"
import {
	CreateESPControllerFactory,
	FindAllESPControllerFactory,
	FindESPByIdControllerFactory,
	FindESPSearchControllerFactory,
	DeleteESPControllerFactory,
	UpdateESPControllerFactory
} from "../factories/controllers/mod.ts"

const routerEsp = new express.Router()

routerEsp.get("/",
	adaptController(FindAllESPControllerFactory())
)

routerEsp.get("/:id",
	adaptController(FindESPByIdControllerFactory())
)

routerEsp.get("/:id", adaptController(FindESPSearchControllerFactory())) // review

routerEsp.post("/",
	adaptController(CreateESPControllerFactory())
)

routerEsp.delete("/:id",
	adaptController(DeleteESPControllerFactory())
)

routerEsp.update("")
export default routerEsp
