import { Device } from "@core/entities/device.ts"

export interface IUpdateDeviceDTO {
    readonly id: Device["id"],
    readonly name?: Device["name"],
    readonly sensors?: Device["sensors"]
}

export default interface IUpdateDevice {
    update: (data: IUpdateDeviceDTO) => Promise<Device>
}