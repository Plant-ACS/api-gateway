import { express } from "@infra/providers/restful/mod.ts"
import { adaptController } from "@main/restful/adapters/adaptController.ts"
import { CreateESPController } from "@pre/controller/esp/mod.ts"
import { CreateESP } from "@app/use-cases/esp/mod.ts"
import { CompositeValidation, RequiredValidator, TypeFieldValidator } from "@pre/validation/mod.ts"
import { StringType } from "@pre/validation/types/mod.ts";

const routerEsp = new express.Router()

routerEsp.post("/",
	adaptController(
		new CreateESPController(
			new CompositeValidation([
				new RequiredValidator("userId"),
				new RequiredValidator("ports"),
				new TypeFieldValidator("userId", [new StringType()]),
			]),
			new CreateESP(/*... falta os repositórios ...*/)))
)

export default routerEsp
