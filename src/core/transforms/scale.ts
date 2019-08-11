import {
	IGeometryTransform,
	IPoint,
	IShapeRecord,
	Matrix2x2
} from '../../types';
import { GeometryTransform } from '../transform';
import { Bound, Multipoint, Point, Round } from '../geometries';

export class Scale extends GeometryTransform implements IGeometryTransform {
	origin?: IPoint;

	constructor(sx: number = 1, sy: number = sx, origin?: IPoint) {
		super();

		this.x = sx;
		this.y = sy;
		this.origin = origin;
	}

	private findNewCoordinate(s: Matrix2x2, p: Matrix2x2) {
		const temp: Matrix2x2 = [[0, 0], [0, 0]];

		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 1; j++) {
				for (let k = 0; k < 2; k++) {
					temp[i][j] += s[i][k] * p[k][j];
				}
			}
		}

		p[0][0] = temp[0][0];
		p[1][0] = temp[1][0];
	}

	apply(r: IShapeRecord): IShapeRecord {
		if (this.x === 1 && this.y === 1) {
			return r;
		}

		const g = r.geometry,
			origin: IPoint = this.origin || g.bound;

		if (g instanceof Round || g instanceof Bound) {
			const w: number = g instanceof Round ? g.r : g.w,
				h: number = g instanceof Round ? g.rv : g.h,
				s: Matrix2x2 = [[this.x, 0], [0, this.y]],
				start: Matrix2x2 = [[g.x - origin.x, 0], [g.y - origin.y, 0]],
				end: Matrix2x2 = [
					[g.x - origin.x + w, 0],
					[g.y - origin.y + h, 0]
				];

			this.findNewCoordinate(s, start);
			this.findNewCoordinate(s, end);

			const params = [
				start[0][0] + origin.x,
				start[1][0] + origin.y,
				end[0][0] + origin.x - (start[0][0] + origin.x),
				end[1][0] + origin.y - (start[1][0] + origin.y)
			];

			return {
				...r,
				geometry:
					g instanceof Round
						? new Round(params[0], params[1], params[2], params[3])
						: new Bound(params[0], params[1], params[2], params[3])
			};
		}

		if (g instanceof Multipoint) {
			const s: Matrix2x2 = [[this.x, 0], [0, this.y]],
				ng = new Multipoint();

			g.forEach(point => {
				const p: Matrix2x2 = [
					[point.x - origin.x, 0],
					[point.y - origin.y, 0]
				];

				this.findNewCoordinate(s, p);

				ng.push(new Point(p[0][0] + origin.x, p[1][0] + origin.y));
			});

			return {
				...r,
				geometry: ng
			};
		}

		return r;
	}
}
