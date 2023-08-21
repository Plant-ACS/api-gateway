import { Sensor } from "@core/entities/sensor.ts"
export interface Esp {
    id: string,
    userId: string,
		sensors: Sensor[],
		ports: [{
			device: string,
			analog: number,
			digital: number
		}]
}
