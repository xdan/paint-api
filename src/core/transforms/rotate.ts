import { IShapeRecord, IGeometryTransform } from '../../types';
import { GeometryTransform } from '../transform';

export class Rotate extends GeometryTransform implements IGeometryTransform {
	angle: number = 0;

	constructor(angle: number = 0) {
		super();

		this.angle = angle;
	}

	apply(r: IShapeRecord): IShapeRecord {
		const geometry = r.geometry.clone();
		geometry.angle = this.angle;

		return {
			...r,
			geometry
		};
	}
}
