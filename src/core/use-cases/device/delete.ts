import { Device } from "@core/entities/device.ts"

export interface IDeleteDeviceDTO {
    readonly id: Device["id"]
}

export default interface IDeleteDevice {
    delete: (data: IDeleteDeviceDTO) => Promise<void>
}
