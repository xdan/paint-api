import { IShapeRecord } from './shape';

export interface ITransform {
	apply(record: IShapeRecord): IShapeRecord;
}

export interface IGeometryTransform extends ITransform {
	x: number;
	y: number;
	setValue(sx: number, sy: number): void;
}

export interface IStyleTransform extends ITransform {}
export interface IBothTransform extends IStyleTransform, IGeometryTransform {}
