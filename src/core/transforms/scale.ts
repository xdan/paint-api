import { IGeometry, IPoint, ITransform } from "../../types";
import { Transform } from "../transform";
import {Multipoint, Point} from "../geometries";

type QMatrix = [
	[number, number],
	[number, number]
];

export class Scale extends Transform implements ITransform {
	sx: number;
	sy: number;
	origin?: IPoint;

	// get diff(): number {
	// 	return Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
	// }

	constructor(sx: number, sy: number, origin?: IPoint) {
		super();

		this.sx = sx;
		this.sy = sy;
		this.origin = origin;
	}

	findNewCoordinate(s: QMatrix, p: QMatrix){
		const temp: QMatrix = [[0, 0], [0, 0]];

		for (let i = 0; i < 2; i++)
		for (let j = 0; j < 1; j++)
		for (let k = 0; k < 2; k++)
			temp[i][j] += (s[i][k] * p[k][j]);

		p[0][0] = temp[0][0];
		p[1][0] = temp[1][0];
	}

	apply(g: IGeometry): IGeometry {
		if (g instanceof Multipoint) {
			const
				s: QMatrix = [[this.sx, 0], [0, this.sy]],
				origin: IPoint = this.origin || g.center;

			const ng = new Multipoint();

			g.forEach((point) => {
				const p: QMatrix = [[point.x - origin.x, 0], [point.y - origin.y, 0]];

				this.findNewCoordinate(s, p);

				ng.push(new Point(p[0][0] + origin.x, p[1][0] + origin.y));
			});

			return ng;
		}

		return g;
	}
}
