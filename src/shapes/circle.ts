import { Shape } from '../core/shape';
import { IRender } from '../types';
import { Round } from '../core/geometries/';
import { Style } from '../core/style';

export class Circle extends Shape<Round> {
	style = new Style();

	constructor(x: number, y: number, r: number) {
		super();

		this.geometry = new Round(x, y, r);
	}

	drawGeometry(render: IRender): void {
		render.drawCircle(this.geometry);
	}
}
