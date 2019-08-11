import { IShapeRecord, IPoint, IGeometryTransform } from '../../types';
import { GeometryTransform } from '../transform';
import { Bound, Multipoint, Point, Round } from '../geometries';

export class Translate extends GeometryTransform
	implements IGeometryTransform, IPoint {
	constructor(x: number = 0, y: number = 0) {
		super();

		this.x = x;
		this.y = y;
	}

	apply(r: IShapeRecord): IShapeRecord {
		if (this.x === 0 && this.y === 0) {
			return r;
		}

		const g = r.geometry;

		if (g instanceof Bound) {
			return {
				...r,
				geometry: new Bound(this.x + g.x, this.y + g.y, g.w, g.h)
			};
		}

		if (g instanceof Point) {
			return {
				...r,
				geometry: new Point(this.x + g.x, this.y + g.y)
			};
		}

		if (g instanceof Round) {
			return {
				...r,
				geometry: new Round(this.x + g.x, this.y + g.y, g.r, g.rv)
			};
		}

		if (g instanceof Multipoint) {
			const ng = new Multipoint();

			return {
				...r,
				geometry: g.reduce((ng, p) => {
					ng.push(
						this.apply({
							...r,
							geometry: p
						}).geometry
					);
					return ng;
				}, ng)
			};
		}

		return r;
	}
}
