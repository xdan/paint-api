export interface IDictionary<T = any> {
	[key: string]: T;
}

export interface IPoint {
	x: number;
	y: number;
}

export interface IBound extends IPoint {
	w: number;
	h: number;
}

export type Callback<T = any> = (arg?: T, ...args: any[]) => any;

