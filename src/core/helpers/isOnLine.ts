import { IPoint } from '../../types';

export function isOnLine(
	p: IPoint,
	line: [IPoint, IPoint],
	tolerance: number = 15
) {
	const start = line[0],
		end = line[1],
		dy = Math.abs(start.y - end.y),
		dx = Math.abs(start.x - end.x);

	if (dy <= tolerance) {
		if (Math.abs(p.y - start.y) <= tolerance) {
			if (start.x > end.x) {
				if (p.x <= start.x && p.x >= end.x) {
					return true;
				}
			} else {
				if (p.x >= start.x && p.x <= end.x) {
					return true;
				}
			}
		}
	} else if (dx <= tolerance) {
		if (Math.abs(p.x - start.x) <= tolerance) {
			if (start.y > end.y) {
				if (p.y <= start.y && p.y >= end.y) {
					return true;
				}
			} else {
				if (p.y >= start.y && p.y <= end.y) {
					return true;
				}
			}
		}
	} else {
		const py = (dy / dx) * p.x;

		if (py <= p.y + tolerance && py >= p.y - tolerance) {
			if (start.x > end.x) {
				if (p.x <= start.x && p.x >= end.x) {
					return true;
				}
			} else {
				if (p.x >= start.x && p.x <= end.x) {
					return true;
				}
			}
		}
	}
	return false;
}
