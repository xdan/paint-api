import {
	IBound,
	IGeometry,
	IPoint,
	IPolyline,
	PointVariant
} from '../../types';
import { Point } from './point';
import { getBoundByMultiline } from '../helpers/';

export class Multipoint extends Array implements IPolyline, IGeometry {
	angle: number;

	constructor(points?: PointVariant[], angle: number = 0) {
		super();

		if (points) {
			points.forEach(point => {
				this.push(point instanceof Point ? point : new Point(point));
			});
		}

		this.angle = angle;

		Object.setPrototypeOf(this, Object.create(Multipoint.prototype));
	}

	get bound(): IBound {
		return getBoundByMultiline(this);
	}

	get center(): IPoint {
		const bound = this.bound;

		return {
			x: bound.x + Math.round(bound.w / 2),
			y: bound.y + Math.round(bound.h / 2)
		};
	}

	clone(): IGeometry {
		const geometry = {};

		Object.setPrototypeOf(geometry, this);

		return geometry as IGeometry;
	}
}
