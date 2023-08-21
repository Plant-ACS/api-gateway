import { Sensor } from "@core/entities/sensor.ts";

export interface Device {
    id: number | string,
    name: string,
    createdAt: Date,
    sensors: Sensor[]
}