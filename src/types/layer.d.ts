import { IRender, DrawOptions } from './render';
import { IShape } from './shape';
import { EventTypes, ISyntheticEvent } from './event';
import { ITransform } from './transform';
import { IApi } from './api';

export interface IContainer {
	readonly transforms: ITransform[];

	draw(canvas: IRender, opt: DrawOptions): void;
	fire(eventName: keyof EventTypes, e: ISyntheticEvent): void;
}

export interface ILayer extends IContainer {
	readonly shapes: IShape[];
	readonly api: IApi;

	add(shape: IShape): ILayer;
	remove(shape: IShape): ILayer;
}
