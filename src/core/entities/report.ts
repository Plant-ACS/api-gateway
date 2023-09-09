import { IESP, IModule } from '@entities'
export interface IReport {
    id: string,
    espId: IESP['id'],
    moduleId: IModule["id"],
    generatedAt: Date
}
