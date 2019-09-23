import { IBound, IPoint } from '../../types';
import { findRectVertices, distance } from './isInBound';

export const isSamePoint = (
	a: IPoint,
	b: IPoint,
	tolerance: number = 0.01
): boolean => distance(a, b) <= tolerance;

export const getOppositeCorner = (
	bound: IBound,
	corner: IPoint,
	angle: number
): IPoint => {
	const vertices = findRectVertices(bound, angle);

	// tslint:disable-next-line:forin
	for (const key in vertices) {
		const cnr = (vertices as any)[key];

		if (isSamePoint(cnr, corner)) {
			switch (key) {
				case 'LT':
					return vertices.RB;
				case 'RT':
					return vertices.LB;
				case 'LB':
					return vertices.RT;
				case 'RB':
					return vertices.LT;
			}
		}
	}

	return corner;
};
