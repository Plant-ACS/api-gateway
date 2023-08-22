import { Esp } from "@core/entities/esp.ts"

export type TFindEspByIdDTO = Esp["id"]
export type TFilterEspDTO = {
	order: "ASC" | "DESC"
}

export default interface IFindEsp {
	findById: (data: TFindEspByIdDTO) => Promise<Esp>
	findAll: () => Promise<Esp[]>
}
