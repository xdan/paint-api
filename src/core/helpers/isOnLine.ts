import { IPoint } from '../../types';

export function isOnLine(
	p: IPoint,
	line: [IPoint, IPoint],
	tolerance: number = 5
) {
	const start = line[0],
		end = line[1],
		dy = Math.abs(start.y - end.y),
		dx = Math.abs(start.x - end.x),
		pointOnAStraightLine = (
			direct: 'x' | 'y',
			qDirect: 'x' | 'y'
		): true | void => {
			if (Math.abs(p[direct] - start[direct]) <= tolerance) {
				if (start[qDirect] > end[qDirect]) {
					if (p[qDirect] <= start[qDirect] && p[qDirect] >= end[qDirect]) {
						return true;
					}
				} else {
					if (p[qDirect] >= start[qDirect] && p[qDirect] <= end[qDirect]) {
						return true;
					}
				}
			}
		};

	if (dy === 0 && pointOnAStraightLine('y', 'x')) {
		return true;
	} else if (dx === 0 && pointOnAStraightLine('x', 'y')) {
		return true;
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
