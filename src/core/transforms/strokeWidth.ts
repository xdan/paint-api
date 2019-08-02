import { Transform } from '../transform';
import { IShapeRecord, ITransform, TransformType } from '../../types';
import { TRANSFORM_STYLE } from '../../const';

export class StrokeWidth extends Transform implements ITransform {
	type: TransformType = TRANSFORM_STYLE;
	strokeWidth: number = 1;

	constructor(strokeWidth: number) {
		super();
		this.strokeWidth = strokeWidth;
	}

	apply(record: IShapeRecord): IShapeRecord {
		if (record.style.strokeWidth !== this.strokeWidth) {
			return {
				...record,
				style: {
					...record.style,
					strokeWidth: this.strokeWidth
				}
			};
		}

		return record;
	}
}
