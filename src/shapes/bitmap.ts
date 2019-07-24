import { Shape } from "../core/shape";
import { IBound, ImageSource, IRender } from "../types";

export class Bitmap extends Shape {
	img: ImageSource;

	x: number;
	y: number;
	w: number;
	h: number;

	get bound(): IBound {
		return this;
	}

	constructor(img: ImageSource, x: number, y: number, w: number, h: number) {
		super();

		this.img = img;

		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	drawGeometry(render: IRender): void {
		render.drawImage(this.img, this);
	}
}
