import { ILayer, IContainer } from './layer';
import { DrawOptions, IRender } from './render';
import { IBound, IGeometry } from './geometry';
import { IStyle } from './style';
import { IManager } from './manager';

export interface IShape extends IContainer {
	bound: IBound;

	manager: IManager;

	geometry: IGeometry;
	style: IStyle;

	readonly simpleStyle: IStyle;
	readonly simpleGeometry: IGeometry;

	layer: ILayer | null;
	setLayer(layer: ILayer | null): void;

	drawGeometry(render: IRender, opt: DrawOptions): void;
}

export interface IShapeRecord {
	geometry: IGeometry;
	style: IStyle;
}
