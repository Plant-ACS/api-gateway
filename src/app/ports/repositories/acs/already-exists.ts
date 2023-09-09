import { TCreateACSDTO } from "@use-cases"
export interface IACSAlreadyExists {
	alreadyExists: (data: TCreateACSDTO) => Promise<boolean>
}
