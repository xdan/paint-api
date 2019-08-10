import { IShapeRecord } from './shape';

export interface ITransform {
	apply(record: IShapeRecord): IShapeRecord;
}

export interface IGeometryTransform extends ITransform {
	x: number;
	y: number;
}

export interface IStyleTransform extends ITransform {}
