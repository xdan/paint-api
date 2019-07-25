import { Geometry } from "../geometry";
import { IBound } from "../../types";

export class Bound extends Geometry implements IBound {
	x: number;
	y: number;
	w: number;
	h: number;

	constructor(x: number, y: number, w: number, h: number) {
		super();

		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	get bound(): IBound {
		return this;
	}
}
