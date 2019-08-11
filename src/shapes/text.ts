import { Shape } from '../core/shape';
import { IRender } from '../types';
import { Bound } from '../core/geometries/';
import { Style } from '../core/style';

export class Text extends Shape<Bound> {
	style = new Style();

	value: string;

	constructor(text: string, x: number, y: number, fontSize: 20) {
		super();

		this.value = text;

		this.geometry = new Bound(x, y, 100, fontSize);
		this.style.font.size = fontSize;
	}

	drawGeometry(render: IRender): void {
		const size = render.measureText(this.value);
		this.geometry.w = size.w;
		this.geometry.h = size.h;

		render.drawText(this.geometry, this.value);
	}
}
