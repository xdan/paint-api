import { Transform } from '../transform';
import { IShapeRecord, ITransform, TransformType } from '../../types';
import { TRANSFORM_STYLE } from '../../const';

export class Opacity extends Transform implements ITransform {
	type: TransformType = TRANSFORM_STYLE;
	opacity: number = 1;

	constructor(opacity: number) {
		super();
		this.opacity = opacity;
	}

	apply(record: IShapeRecord): IShapeRecord {
		if (record.style.opacity !== this.opacity) {
			return {
				...record,
				style: {
					...record.style,
					opacity: this.opacity
				}
			};
		}

		return record;
	}
}
