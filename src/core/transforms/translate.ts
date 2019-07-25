import { IGeometry, IPoint, ITransform } from "../../types";
import { Transform } from "../transform";
import { Bound, Multipoint, Point, Round } from "../geometries";


export class Translate extends Transform implements ITransform, IPoint {
	x: number = 0;
	y: number = 0;

	constructor(x: number, y: number) {
		super();

		this.x = x;
		this.y = y;
	}

	apply(g: IGeometry): IGeometry {
		if (g instanceof Bound) {
			return new Bound(this.x + g.x, this.y + g.y, g.w, g.h);
		}

		if (g instanceof Point) {
			return new Point(this.x + g.x, this.y + g.y);
		}

		if (g instanceof Round) {
			return new Round(this.x + g.x, this.y + g.y, g.r);
		}

		if (g instanceof Multipoint) {
			const ng = new Multipoint();

			return g.reduce((ng, p) => {
				return ng.push(this.apply(p)), ng;
			}, ng);
		}

		return g;
	}
}
