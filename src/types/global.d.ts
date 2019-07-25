export interface IDictionary<T = any> {
	[key: string]: T;
}

export type Callback<T = any> = (arg?: T, ...args: any[]) => any;

