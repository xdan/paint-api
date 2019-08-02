import { ILayer } from './layer';
import { DrawOptions, IRender } from './render';
import { IGeometry } from './geometry';
import { ITransform } from './transform';
import { IStyle } from './style';
import { IManager } from './manager';

export interface IShape extends ILayer {
	manager: IManager;
	transforms: ITransform[];

	geometry: IGeometry;
	style: IStyle;

	drawGeometry(render: IRender, opt: DrawOptions): void;
}

export interface IShapeRecord {
	geometry: IGeometry;
	style: IStyle;
}
