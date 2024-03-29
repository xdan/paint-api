import { IBound, IPolyline } from '../../types';

export function getBoundByMultiline(points: IPolyline): IBound {
	if (points.length < 2) {
		throw new Error('Need at least two points');
	}

	const bnd = {
		x1: Infinity,
		x2: -Infinity,
		y1: Infinity,
		y2: -Infinity
	};

	points.forEach(point => {
		bnd.x1 = Math.min(point.x, bnd.x1);
		bnd.y1 = Math.min(point.y, bnd.y1);
		bnd.x2 = Math.max(point.x, bnd.x2);
		bnd.y2 = Math.max(point.y, bnd.y2);
	});

	return {
		x: bnd.x1,
		y: bnd.y1,
		w: bnd.x2 - bnd.x1,
		h: bnd.y2 - bnd.y1
	};
}
