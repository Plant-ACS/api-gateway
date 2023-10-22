import { ESPRepository } from "./esp.ts";
import {
	IESPAlreadyExistsRepository,
	ISaveESPRepository,
	IDeleteESPRepository,
	IFindESPRepository,
	IUpdateESPRepository
} from "@app/ports/repositories/mod.ts"

const ESPRepositories = new ESPRepository

const alreadyExistsReposiory: IESPAlreadyExistsRepository = ESPRepositories
const saveESPRepository: ISaveESPRepository = ESPRepositories
const deleteESPRepository: IDeleteESPRepository = ESPRepositories
const findESPRepository: IFindESPRepository = ESPRepositories
const updateESPRepository: IUpdateESPRepository = ESPRepositories

export {
	alreadyExistsReposiory,
	saveESPRepository,
	deleteESPRepository,
	findESPRepository,
	updateESPRepository
}
