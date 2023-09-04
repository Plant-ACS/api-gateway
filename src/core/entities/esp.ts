import { IModule } from "@core/entities/module.ts"
export interface IESP {
    id: string,
    userId: string,
	ports: Array<{
		key: number | number[],
		module: IModule['id']
	}>
}
