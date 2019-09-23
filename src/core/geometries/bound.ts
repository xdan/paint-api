import { Geometry } from '../geometry';
import { IBound } from '../../types';

export class Bound extends Geometry implements IBound {
	x: number;
	y: number;
	w: number;
	h: number;

	constructor(x: number, y: number, w: number, h: number, angle: number = 0) {
		super();

		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.angle = angle;
	}

	get bound(): IBound {
		return this;
	}
}
