import { IESP } from '@entities'
export interface IReport {
    id: string,
    espId: IESP['id'],
    sensorId: string,
    generatedAt: Date
}
