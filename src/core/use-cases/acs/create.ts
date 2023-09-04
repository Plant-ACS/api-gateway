import { IACS } from "@entities";

export type TCreateDeviceDTO = Omit<IACS, "id">

export default interface ICreateDevice {
    create: (data: TCreateDeviceDTO) => Promise<IACS>
}