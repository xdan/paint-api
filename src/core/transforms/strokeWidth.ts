import { StyleTransform } from '../transform';
import { IShapeRecord, IStyleTransform } from '../../types';

export class StrokeWidth extends StyleTransform implements IStyleTransform {
	strokeWidth: number = 1;

	constructor(strokeWidth: number) {
		super();
		this.strokeWidth = strokeWidth;
	}

	apply(record: IShapeRecord): IShapeRecord {
		if (record.style.strokeWidth !== this.strokeWidth) {
			const style = record.style.clone();

			style.strokeWidth = this.strokeWidth;

			return {
				...record,
				style
			};
		}

		return record;
	}
}
