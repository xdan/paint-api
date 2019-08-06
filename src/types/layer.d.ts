import { IRender, DrawOptions } from './render';
import { IShape } from './shape';
import { EventTypes, ISyntheticEvent } from './event';

export interface ILayerBox {
	draw(canvas: IRender, opt: DrawOptions): void;
	fire(eventName: keyof EventTypes, e: ISyntheticEvent): void;
}

export interface ILayer extends ILayerBox {
	shapes: IShape[];
}
