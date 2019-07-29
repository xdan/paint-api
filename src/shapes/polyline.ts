import { Shape } from '../core/shape';
import { IRender, PointVariant } from '../types';
import { Multipoint } from '../core/geometries/';
import { Style } from '../core/style';

export class Polyline extends Shape<Multipoint> {
	style = new Style();

	constructor(points?: PointVariant[]) {
		super();

		this.geometry = new Multipoint(points);
	}

	drawGeometry(render: IRender): void {
		render.drawPolyline(this.geometry);
	}
}
