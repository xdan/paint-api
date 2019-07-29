import { Shape } from '../core/shape';
import { IRender } from '../types';
import { Round } from '../core/geometries/';

export class Circle extends Shape<Round> {
	constructor(x: number, y: number, r: number) {
		super();

		this.geometry = new Round(x, y, r);
	}

	drawGeometry(render: IRender): void {
		render.drawCircle(this.geometry);
	}
}
