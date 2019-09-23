import { IBound, IGeometry, IPoint } from '../types';

export abstract class Geometry implements IGeometry {
	angle: number = 0;

	abstract bound: IBound;

	get center(): IPoint {
		const bound = this.bound;

		return {
			x: bound.x + Math.round(bound.w / 2),
			y: bound.y + Math.round(bound.h / 2)
		};
	}

	clone(): IGeometry {
		const geometry = {};

		Object.setPrototypeOf(geometry, this);

		return geometry as IGeometry;
	}
}
