import { Esp } from "@core/entities/esp.ts"

export type TUpdateEspDTO = {
	readonly id: Esp["id"]
} & Partial<Omit<Esp, "id" | "userId">>

export default interface IUpdateEsp {
	update: (data: TUpdateEspDTO) => Promise<Esp>
}
