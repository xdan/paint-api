import { IPoint, IRound } from '../../types';

export function isInRound(point: IPoint, round: IRound) {
	return (
		Math.sqrt(
			Math.pow(point.x - round.x, 2) + Math.pow(point.y - round.y, 2)
		) < round.r
	);
}
