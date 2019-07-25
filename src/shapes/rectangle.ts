import { Shape } from "../core/shape";
import { IRender } from "../types";
import { Bound } from "../core/geometries/";

export class Rectangle extends Shape<Bound> {
	constructor(x: number, y: number, w: number, h: number) {
		super();

		this.geometry = new Bound(x, y, w, h);
	}

	drawGeometry(render: IRender): void {
		render.drawRectangle(this.geometry, true);
	}
}
