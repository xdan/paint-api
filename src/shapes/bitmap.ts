import { Shape } from '../core/shape';
import { ImageSource, IRender } from '../types';
import { Bound } from '../core/geometries/';
import { Style } from '../core/style';

export class Bitmap extends Shape<Bound> {
	style = new Style();

	img: ImageSource;

	constructor(img: ImageSource, x: number, y: number, w: number, h: number) {
		super();

		this.img = img;

		this.geometry = new Bound(x, y, w, h);
	}

	drawGeometry(render: IRender): void {
		render.drawImage(this.img, this.geometry);
	}
}
