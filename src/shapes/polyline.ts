import { Shape } from "../core/shape";
import { IRender, PointVariant } from "../types";
import { Multipoint } from "../core/geometries/";

export class Polyline extends Shape<Multipoint> {
	constructor(points: PointVariant[]) {
		super();

		this.geometry = new Multipoint(points);
	}

	drawGeometry(render: IRender): void {
		render.drawPolyline(this.geometry);
	}
}
