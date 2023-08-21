import { Device } from "@core/entities/device.ts"

export type TCreateDeviceDTO = Omit<Device, "id">

export default interface ICreateDevice {
    create: (data: TCreateDeviceDTO) => Promise<Device>
}