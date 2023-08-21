import { Device } from "@core/entities/device.ts"

export interface IDeleteDeviceDTO {
    readonly id: Device["id"],
    readonly name?: Device["name"]
}

export default interface IDeleteDevice {
    delete: (data: IDeleteDeviceDTO) => Promise<void>
}