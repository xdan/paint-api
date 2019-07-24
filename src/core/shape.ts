import { IRender, IShape, IBound, DrawOptions } from "../types";
import { Layer } from "./layer";
import { isPointInBound } from "./helpers/isPointInBound";

export abstract class Shape extends Layer implements IShape {
	abstract bound: IBound;

	abstract drawGeometry(render: IRender, opt: DrawOptions): void;

	draw(render: IRender, opt: DrawOptions): void {
		this.drawGeometry(render, opt);

		if (opt.drawBoundIfInPoint) {
			const { bound } = this;

			console.log(this.constructor.name, bound);

			if (isPointInBound(opt.cursor, bound)) {
				render.drawRectangle(bound, false);
			}
		}

		super.draw(render, opt)
	}
}
