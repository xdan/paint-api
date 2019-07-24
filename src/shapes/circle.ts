import { Shape } from "../core/shape";
import { IRender, IBound } from "../types";

export class Circle extends Shape {
	x: number;
	y: number;
	r: number;

	get bound(): IBound {
		return {
			x: this.x - this.r,
			y: this.y - this.r,
			w: this.r * 2,
			h: this.r * 2
		}
	}

	constructor(x: number, y: number, r: number) {
		super();

		this.x = x;
		this.y = y;
		this.r = r;
	}

	drawGeometry(render: IRender): void {
		render.drawCircle(this.x, this.y, this.r);
	}
}
