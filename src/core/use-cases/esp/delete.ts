import { Esp } from "@core/entities/esp.ts"

export interface IDeleteEspDTO {
	readonly id: Esp["id"]
}

export default interface IDeleteEsp {
	delete: (data: IDeleteEspDTO) => Promise<void>
}
