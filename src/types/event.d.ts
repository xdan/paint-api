import { IPoint } from './geometry';
import { IApi } from './api';
import { IShape } from './shape';

export interface ISyntheticEvent {
	type: keyof EventTypes;
	api: IApi;
	shape?: IShape;
	corner?: IPoint;
}

export interface IMouseSyntheticEvent extends ISyntheticEvent, IPoint {}

export type Handler<T = undefined, E = ISyntheticEvent> = (
	this: T,
	e: E
) => any;

export interface EventTypes {
	mouseup: IMouseSyntheticEvent;
	mousedown: IMouseSyntheticEvent;
	mousemove: IMouseSyntheticEvent;
	cornerMousedown: IMouseSyntheticEvent;
	[key: string]: ISyntheticEvent;
}

export interface RequiredParamsList {
	mouseup: IMouseSyntheticEvent;
	mousedown: IMouseSyntheticEvent;
	mousemove: IMouseSyntheticEvent;
	cornerMousedown: IMouseSyntheticEvent;
	[key: string]: IMouseSyntheticEvent;
}

export interface IEventer<T> {
	on<K extends keyof EventTypes>(
		event: K,
		callback: Handler<T, EventTypes[K]>
	): IEventer<T>;

	fire<K extends keyof EventTypes>(
		event: K,
		arg: RequiredParamsList[K],
		...args: any[]
	): IEventer<T>;
}
