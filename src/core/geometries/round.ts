import { Geometry } from '../geometry';
import { IBound, IRound } from '../../types';

export class Round extends Geometry implements IRound {
	x: number;
	y: number;
	r: number;

	constructor(x: number, y: number, r: number) {
		super();

		this.x = x;
		this.y = y;
		this.r = r;
	}

	get bound(): IBound {
		return {
			x: this.x - this.r,
			y: this.y - this.r,
			w: this.r * 2,
			h: this.r * 2
		};
	}
}
