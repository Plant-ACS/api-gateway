export interface IRouter {
	use(path: string, callback: (req: any, res: any, next: any) => void | IRouter): void
	get(path: string, callback: (req: any, res: any) => void): void
	post(path: string, callback: (req: any, res: any) => void): void
	put(path: string, callback: (req: any, res: any) => void): void
	delete(path: string, callback: (req: any, res: any) => void): void
}

export interface IRestFul {
	listen(callback?: (host: string, port: number) => void): void
	use(path?: string, callback?: (req: any, res: any, next: any) => void | IRouter): void
	get(path: string, callback: (req: any, res: any) => void): void
	post(path: string, callback: (req: any, res: any) => void): void
	put(path: string, callback: (req: any, res: any) => void): void
	delete(path: string, callback: (req: any, res: any) => void): void
}
