import { IESP } from "@entities"

export type TFindEspByIdDTO = IESP["id"]
export type TFilterEspDTO = {
	order: "ASC" | "DESC"
}

export default interface IFindEsp {
	findById: (data: TFindEspByIdDTO) => Promise<IESP>
	findAll: () => Promise<IESP[]>
}
