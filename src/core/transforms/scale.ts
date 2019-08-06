import {
	IPoint,
	IShapeRecord,
	ITransform,
	Matrix2x2,
	TransformType
} from '../../types';
import { Transform } from '../transform';
import { Bound, Multipoint, Point, Round } from '../geometries';

export class Scale extends Transform implements ITransform {
	type: TransformType = TransformType.geometry;

	sx: number;
	sy: number;
	origin?: IPoint;

	constructor(sx: number, sy: number, origin?: IPoint) {
		super();

		this.sx = sx;
		this.sy = sy;
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
		const g = r.geometry,
			origin: IPoint = this.origin || g.center;

		if (g instanceof Round || g instanceof Bound) {
			const w: number = g instanceof Round ? g.r : g.w,
				h: number = g instanceof Round ? g.rv : g.h,
				s: Matrix2x2 = [[this.sx, 0], [0, this.sy]],
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
			const s: Matrix2x2 = [[this.sx, 0], [0, this.sy]],
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
