import {IGeometry, IPoint, ITransform, Matrix2x2} from "../../types";
import { Transform } from "../transform";
import { Bound, Multipoint, Point, Round } from "../geometries";

export class Scale extends Transform implements ITransform {
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

		for (let i = 0; i < 2; i++)
		for (let j = 0; j < 1; j++)
		for (let k = 0; k < 2; k++)
			temp[i][j] += (s[i][k] * p[k][j]);

		p[0][0] = temp[0][0];
		p[1][0] = temp[1][0];
	}

	apply(g: IGeometry): IGeometry {
		const origin: IPoint = this.origin || g.center;

		if (g instanceof Round) {
			return new Round(
				g.x,
				g.y,
				g.r + Math.sqrt(Math.pow(this.sx, 2) + Math.pow(this.sy, 2))
			);
		}

		if (g instanceof Bound) {
			const
				s: Matrix2x2 = [[this.sx, 0], [0, this.sy]],
				start: Matrix2x2 = [[g.x - origin.x, 0], [g.y - origin.y, 0]],
				end: Matrix2x2 = [[g.x - origin.x + g.w, 0], [g.y - origin.y + g.h, 0]];

				this.findNewCoordinate(s, start);
				this.findNewCoordinate(s, end);

			return new Bound(
				start[0][0] + origin.x,
				start[1][0] + origin.y,
				end[0][0] + origin.x - (start[0][0] + origin.x),
				end[1][0] + origin.y - (start[1][0] + origin.y)
				);
		}

		if (g instanceof Multipoint) {
			const
				s: Matrix2x2 = [[this.sx, 0], [0, this.sy]],
				ng = new Multipoint();

			g.forEach((point) => {
				const p: Matrix2x2 = [[point.x - origin.x, 0], [point.y - origin.y, 0]];

				this.findNewCoordinate(s, p);

				ng.push(new Point(p[0][0] + origin.x, p[1][0] + origin.y));
			});

			return ng;
		}

		return g;
	}
}
