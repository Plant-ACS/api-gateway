import { Esp } from "@core/entities/esp.ts"

export type TCreateEspDTO = Omit<Esp, "id">

export default interface ICreateEsp {
	create: (data: TCreateEspDTO) => Promise<Esp>
}
