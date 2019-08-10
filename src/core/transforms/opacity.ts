import { StyleTransform } from '../transform';
import { IShapeRecord, IStyleTransform } from '../../types';

export class Opacity extends StyleTransform implements IStyleTransform {
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
