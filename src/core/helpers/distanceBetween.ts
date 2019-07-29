import { IPoint } from '../../types';

export function distanceBetween(point1: IPoint, point2: IPoint) {
	return Math.sqrt(
		Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
	);
}
