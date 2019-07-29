import { Geometry } from "../geometry";
import { IBound, IPoint, PointVariant } from "../../types";

export class Point extends Geometry implements IPoint {
	x: number;
	y: number;

	constructor(x: PointVariant | number, y?: number) {
		super();

		if (typeof x === 'number') {
			this.x = x;
			this.y = y || 0;

		} else if (Array.isArray(x)) {
			this.x = x[0];
			this.y = x[1];

		} else {
			this.x = x.x;
			this.y = x.y;
		}
	}

	get bound(): IBound {
		return {
			x: this.x,
			y: this.y,
			w: 1,
			h: 1
		}
	}
}
