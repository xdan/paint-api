import { IGeometryTransform, IShapeRecord } from '../../types';
import { GeometryTransform } from '../transform';
import { Bound, Multipoint, Point, Round } from '../geometries';

export class Zoom extends GeometryTransform implements IGeometryTransform {
	constructor(sx: number = 1, sy: number = sx) {
		super();

		this.x = sx;
		this.y = sy;
	}

	apply(r: IShapeRecord): IShapeRecord {
		const { x, y } = this;

		if (x === 1 && y === 1) {
			return r;
		}

		const g = r.geometry;

		if (g instanceof Round || g instanceof Bound) {
			return {
				...r,
				geometry:
					g instanceof Round
						? new Round(g.x * x, g.y * y, g.r * x, g.rv * y)
						: new Bound(g.x * x, g.y * y, g.w * x, g.h * y)
			};
		}

		if (g instanceof Multipoint) {
			const ng = new Multipoint();

			g.forEach(point => {
				ng.push(new Point(point.x * x, point.y * y));
			});

			return {
				...r,
				geometry: ng
			};
		}

		return r;
	}
}
