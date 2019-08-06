import { IBound, IPoint } from '../../types';

export const getOppositeCorner = (bound: IBound, corner: IPoint): IPoint => ({
	x: Math.abs(corner.x - bound.x) < 1 ? corner.x + bound.w : bound.x,
	y: Math.abs(corner.y - bound.y) < 1 ? corner.y + bound.h : bound.y
});
