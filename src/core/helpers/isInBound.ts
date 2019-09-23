import { IBound, IBoundVertices, IPoint } from '../../types';

export function isInBound(point: IPoint, box: IBound, tolerance: number = 0) {
	return (
		point.x >= box.x - tolerance &&
		point.y >= box.y - tolerance &&
		point.x <= box.x + box.w + tolerance &&
		point.y <= box.y + box.h + tolerance
	);
}

export function getPerpOfLine(start: IPoint, end: IPoint): [IPoint, IPoint] {
	const x = (start.x + end.x) / 2;
	const y = (start.y + end.y) / 2;
	const dx = (end.x - start.x) / 3;
	const dy = (end.y - start.y) / 3;

	return [
		{ x, y },
		{
			x: x + dy,
			y: y - dx
		}
	];
}

/**
 * Find point after rotation around another point by X degrees
 *
 * @param point The point to be rotated [X,Y]
 * @param rotationCenterPoint The point that should be rotated around [X,Y]
 * @param degrees The degrees to rotate the point
 * @return Returns point after rotation [X,Y]
 */
function rotatePoint(
	point: IPoint,
	rotationCenterPoint: IPoint,
	degrees: number
): IPoint {
	// Using radians for this formula
	const radians = (degrees * Math.PI) / 180;
	let { x, y } = point;

	// Translate the plane on which rotation is occurring.
	// We want to rotate around 0,0. We'll add these back later.
	x -= rotationCenterPoint.x;
	y -= rotationCenterPoint.y;

	// Perform the rotation
	const newPoint = { x: 0, y: 0 };

	newPoint.x = x * Math.cos(radians) - y * Math.sin(radians);
	newPoint.y = x * Math.sin(radians) + y * Math.cos(radians);

	// Translate the plane back to where it was.
	newPoint.x += rotationCenterPoint.x;
	newPoint.y += rotationCenterPoint.y;

	return newPoint;
}

/**
 * Find the vertices of a rotating rectangle
 *
 * @param bound From left, top [X,Y]
 * @param degrees Degrees rotated around center
 * @return {Object} Arrays LT, RT, RB, LB [X,Y]
 */
export function findRectVertices(
	bound: IBound,
	degrees: number
): IBoundVertices {
	const left = bound.x;
	const right = bound.x + bound.w;
	const top = bound.y;
	const bottom = bound.y + bound.h;

	const center = { x: left + bound.w / 2, y: top + bound.h / 2 };

	const LTN = { x: left, y: top };
	const RTN = { x: right, y: top };
	const RBN = { x: right, y: bottom };
	const LBN = { x: left, y: bottom };

	const LT = rotatePoint(LTN, center, degrees);
	const RT = rotatePoint(RTN, center, degrees);

	return {
		LT,
		RT,
		RB: rotatePoint(RBN, center, degrees),
		LB: rotatePoint(LBN, center, degrees),
		CT: getPerpOfLine(LT, RT)[1]
	};
}

/**
 * Distance formula
 *
 * @param {Array} p1 First point [X,Y]
 * @param {Array} p2 Second point [X,Y]
 * @return {Number} Returns distance between points
 */
export function distance(p1: IPoint, p2: IPoint): number {
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/**
 * Heron's formula (triangle area)
 *
 * @param {Number} d1 Distance, side 1
 * @param {Number} d2 Distance, side 2
 * @param {Number} d3 Distance, side 3
 * @return {Number} Returns area of triangle
 */
function triangleArea(d1: number, d2: number, d3: number): number {
	// See https://en.wikipedia.org/wiki/Heron's_formula
	const s = (d1 + d2 + d3) / 2;
	return Math.sqrt(s * (s - d1) * (s - d2) * (s - d3));
}

export function isInRotatedBound(
	point: IPoint,
	box: IBound,
	angle: number,
	extra: number = 5
) {
	// Find the area of the rectangle
	const rectArea = (box.w + extra * 2) * (box.h + extra * 2);

	// Find the vertices
	const vertices = findRectVertices(
		{
			x: box.x - extra,
			y: box.y - extra,
			w: box.w + extra * 2,
			h: box.h + extra * 2
		},
		angle
	);

	// Create an array of the areas of the four triangles
	const triAreaTriangles = [
		// Click, LT, RT
		triangleArea(
			distance(point, vertices.LT),
			distance(vertices.LT, vertices.RT),
			distance(vertices.RT, point)
		),
		// Click, RT, RB
		triangleArea(
			distance(point, vertices.RT),
			distance(vertices.RT, vertices.RB),
			distance(vertices.RB, point)
		),
		// Click, RB, LB
		triangleArea(
			distance(point, vertices.RB),
			distance(vertices.RB, vertices.LB),
			distance(vertices.LB, point)
		),
		// Click, LB, LT
		triangleArea(
			distance(point, vertices.LB),
			distance(vertices.LB, vertices.LT),
			distance(vertices.LT, point)
		)
	];

	// Reduce this array with a sum function
	// Round to avoid small JS math differences
	const triArea = triAreaTriangles.reduce((a, b) => a + b);

	return Math.abs(triArea - rectArea) < 0.01;
}

export const angle = (p: IPoint): number => {
	return (Math.atan2(p.y, p.x) * 180) / Math.PI;
};
