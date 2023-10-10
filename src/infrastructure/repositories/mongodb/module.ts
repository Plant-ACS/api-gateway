import { IModule } from "@core/entities/module.ts";
import { IModuleRepository } from "@app/ports/repositories/mod.ts"
import { TFindModuleSearchDTO } from "@app/ports/repositories/module/find.ts";
import { TUpdateModuleDTO } from "@app/ports/repositories/module/update.ts";

export class ModuleRepository implements IModuleRepository {
	async alreadyExists(data: Omit<IModule,"id">): Promise<boolean> {

	}

	async save(data: Omit<IModule,"id">): Promise<IModule> {

	}

	async delete(data: string): Promise<void> {

	}

	async findById(data: string): Promise<IModule> {

	}

	async findSearch(data: TFindModuleSearchDTO): Promise<IModule[]> {

	}

	async findAll(): Promise<IModule[]> {

	}

	async update (data: TUpdateModuleDTO): Promise<IModule> {

	}

}
