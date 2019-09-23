export abstract class IGeometry {
	angle: number;
	bound: IBound;
	center: IPoint;

	clone(): IGeometry;
}

export interface IPoint {
	x: number;
	y: number;
}

export interface IBoundVertices {
	LT: IPoint;
	RT: IPoint;
	RB: IPoint;
	LB: IPoint;
	CT: IPoint;
}

export type CornerType = keyof IBoundVertices;

export interface ICorner extends IPoint {
	type: CornerType;
}

export interface IRound extends IPoint {
	r: number;
	rv?: number;
}

export interface IBound extends IPoint {
	w: number;
	h: number;
}

export interface IPolyline extends Array<IPoint> {
	[key: number]: IPoint;
}

export type PointVariant = IPoint | [number, number];

export type Matrix2x2 = [[number, number], [number, number]];
