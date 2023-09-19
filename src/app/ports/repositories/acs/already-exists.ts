import { IACS } from "@entities"
export interface IACSAlreadyExists {
	alreadyExists: (data: Omit<IACS, "id">) => Promise<boolean>
}
