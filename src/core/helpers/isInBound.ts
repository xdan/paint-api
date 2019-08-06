import { IBound, IPoint } from '../../types';

export function isInBound(point: IPoint, box: IBound, tolerance: number = 0) {
	return (
		point.x >= box.x - tolerance &&
		point.y >= box.y - tolerance &&
		point.x <= box.x + box.w + tolerance &&
		point.y <= box.y + box.h + tolerance
	);
}
