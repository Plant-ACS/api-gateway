export interface ISocket {
	listen(callback?: (host: string, port: number) => void): void
	use(key: string, callback: (data: any, socket: any, next: () => void) => void): void
	add(key: string, callback: (data: any, socket: any) => void): void
	remove(key: string): void
	get(key: string): void
}
