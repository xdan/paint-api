import { IShapeRecord } from './shape';

export const enum TransformType {
	geometry,
	style,
	both
}

export interface ITransform {
	type: TransformType;
	apply(record: IShapeRecord): IShapeRecord;
}
