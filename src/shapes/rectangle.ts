import { Shape } from "../core/shape";
import { IBound, IRender } from "../types";

export class Rectangle extends Shape {
	x: number;
	y: number;
	w: number;
	h: number;

	get bound(): IBound {
		return this;
	}

	constructor(x: number, y: number, w: number, h: number) {
		super();

		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	drawGeometry(render: IRender): void {
		render.drawRectangle(this, true);
	}
}
