import { Geometry } from '../geometry';
import { IBound, IRound } from '../../types';

export class Round extends Geometry implements IRound {
	x: number;
	y: number;
	r: number;
	rv: number;
	angle: number;

	constructor(
		x: number,
		y: number,
		r: number,
		rv: number = r,
		angle: number = 0
	) {
		super();

		this.x = x;
		this.y = y;
		this.r = r;
		this.rv = rv;
		this.angle = angle;
	}

	get bound(): IBound {
		return {
			x: this.x - this.r,
			y: this.y - this.rv,
			w: this.r * 2,
			h: this.rv * 2
		};
	}
}
