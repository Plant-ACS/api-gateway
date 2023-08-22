import { Sensor } from "@core/entities/sensor.ts"

export interface IDeleteSensorDTO {
	readonly id: Sensor["id"]
}

export default interface IDeleteSensor {
	delete: (data: IDeleteSensorDTO) => Promise<void>
}
