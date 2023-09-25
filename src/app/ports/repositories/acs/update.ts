import { IACS } from "@entities"

export type TUpdateACSDTO = {
  readonly id: IACS["id"]
} & Partial<Omit<IACS, "id" | "createdAt">>

export interface IUpdateACSRepository {
	update: (data: TUpdateACSDTO) => Promise<IACS>
}
