export interface IModule {
    id: string,
    name: string,
    isAnalog: boolean,
    isDigital: boolean,
    maxVoltage?: number,
    pinAmount: number,
}
