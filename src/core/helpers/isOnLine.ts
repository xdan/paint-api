import { IPoint } from '../../types';
import { distance } from './isInBound';

export function isOnLine(
	p: IPoint,
	line: [IPoint, IPoint],
	tolerance: number = 5
) {
	const c = distance(line[0], line[1]);
	const a = distance(line[0], p);
	const b = distance(line[1], p);

	return Math.abs(a + b - c) < tolerance;
}
