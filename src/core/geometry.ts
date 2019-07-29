import { IBound, IGeometry, IPoint } from '../types';

export abstract class Geometry implements IGeometry {
	abstract bound: IBound;

	get center(): IPoint {
		const bound = this.bound;
		return {
			x: bound.x + Math.round(bound.w / 2),
			y: bound.y + Math.round(bound.h / 2)
		};
	}
}
