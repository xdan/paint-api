import {
	IGeometryTransform,
	IShapeRecord,
	IStyleTransform,
	ITransform
} from '../types';

export abstract class Transform implements ITransform {
	static applyAll(
		transforms: ITransform[],
		record: IShapeRecord,
		type: typeof Transform = GeometryTransform
	): IShapeRecord {
		return transforms
			.filter(transform => transform instanceof type)
			.reduce(
				(record, transformation) => transformation.apply(record),
				record
			);
	}

	abstract apply(geometry: IShapeRecord): IShapeRecord;
}

export abstract class StyleTransform extends Transform
	implements IStyleTransform {}

export abstract class GeometryTransform extends Transform
	implements IGeometryTransform {
	x: number;
	y: number;

	setValue(sx: number, sy: number = sx) {
		this.x = sx;
		this.y = sy;
	}
}
