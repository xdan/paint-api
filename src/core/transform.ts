import { IShapeRecord, ITransform, TransformType } from '../types';

export abstract class Transform implements ITransform {
	abstract type: TransformType;

	static apply(
		transforms: ITransform[],
		record: IShapeRecord,
		type: TransformType
	): IShapeRecord {
		return transforms
			.filter(
				transform =>
					transform.type === type ||
					transform.type === TransformType.both
			)
			.reduce(
				(record, transformation) => transformation.apply(record),
				record
			);
	}

	abstract apply(geometry: IShapeRecord): IShapeRecord;
}
