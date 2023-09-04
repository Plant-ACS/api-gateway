import { IESP } from "@entities"

export type TUpdateEspDTO = {
	readonly id: IESP["id"]
} & Partial<Omit<IESP, "id" | "userId">>

export default interface IUpdateEsp {
	update: (data: TUpdateEspDTO) => Promise<IESP>
}
