import {IPoint} from "./geometry";

export interface ISyntheticEvent {
	type: keyof EventTypes;
}

export interface IMouseSyntheticEvent extends ISyntheticEvent, IPoint {}

export type Handler<T = undefined, E = ISyntheticEvent> = (this: T, e: E) => any;

export interface EventTypes {
	"mouseup": IMouseSyntheticEvent;
	"mousedown": IMouseSyntheticEvent;
	"mousemove": IMouseSyntheticEvent;
	[key: string]: ISyntheticEvent;
}

export interface RequiredParamsList {
	"mouseup": IPoint;
	"mousedown": IPoint;
	"mousemove": IPoint;
	[key: string]: any;
}

export interface IEventer<T> {
	on<K extends keyof EventTypes>(event: K, callback: Handler<T, EventTypes[K]>): IEventer<T>;
	fire<K extends keyof EventTypes>(event: K, arg: RequiredParamsList[K]): IEventer<T>;
}
