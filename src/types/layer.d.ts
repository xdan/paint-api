import { IRender, DrawOptions } from './render';
import { IShape } from './shape';

export interface ILayer {
	shapes: IShape[];
	draw(canvas: IRender, opt: DrawOptions): void;
}
